import React, { useState } from 'react'
import './login.css'
import LoginImg from '../../Images/login-bg.png' 
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [focususer,setFocususer] = useState(false)
    const [focuspass,setFocuspass] = useState(false)
    const history = useNavigate()
  return (
    <div className='main-login-cont'>
        <div className="row justify-content-center">
<div className="col-md-12 col-lg-10">
<div className="wrap d-md-flex">
<div className="img" style={{backgroundImage:`url(${LoginImg})`}} >
</div>
<div className="login-wrap p-4 p-md-5">
<div className="w-100">
<h3 className="mb-4">Sign In</h3>
<p>Type your username and password to sign in</p>
</div>
<form className="signin-form">
<div className='input-field-cont' style={{border:focususer?"2px solid #FFBF00":"2px solid rgba(131, 131, 131, 0.8)"}}>    
<div className="form-group">
<span><i class="fa fa-user"></i></span>
<input onFocus={()=> setFocususer(true)} onBlur={()=> setFocususer(false)} type="text" className="form-control" placeholder="Username" required=""/>
</div>
</div>
<div className='input-field-cont' style={{border:focuspass?"2px solid #FFBF00":"2px solid rgba(131, 131, 131, 0.8)"}}>
<div className="form-group">
    <span><i class="fa fa-lock"></i></span>
<input type="password" onFocus={()=> setFocuspass(true)} onBlur={()=> setFocuspass(false)} on className="form-control" placeholder="Password" required=""/>
</div>
</div>
<div className='forgot-cont'>
<a className='forgot-tag'>Forgot Password ?</a>
</div>

<div className="form-group">
<button onClick={(e)=> {
  e.preventDefault()
  history('/')
}} className="form-control btn btn-primary rounded submit px-3">Sign In</button>
</div>
</form>
<br />
</div>
</div>
</div>
</div>
    </div>
  )
}

export default Login