import React, { useState } from 'react'
import Layout from '../../layout'
import userImg from '../../Images/userImg.png'
import camera from '../../Images/Vector5.png'
import './update-profile.css'
const Index = () => {
    const [name,setName] = useState('Admin')
    const [email,setEmail] = useState('rajabali810@gmail.com')
    const [password,setPassword] = useState('rajab1234')
  return (
      <Layout>
          <div className='row'>
         <div className='col-md-12'>
         <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
         </div>
         <div className='col-md-12'>
             <h1 className='text-center'>
                 Update Profile
             </h1>
         </div>
             <div  className='col-md-12 my-4 profile-img-cont'>
             <div className='add-status profile-img-update-cont circle'>     
            <img src={userImg} className='update-img add-status-profile'  alt='profile image'/>
              <img src={camera} className='add-cam-btn'/>
                 </div>    
             </div>
            <div className='col-md-8 mx-auto'>
              <form className='form-update-profile'>
                <div className='form-group update-group'>
                    <label> Name: </label>
                    <input onChange={(e)=> setName(e.target.value)} type='text' className='form-control update-input' placeholder='Name' value={name}/>
                </div>
                <div className='form-group update-group'>
                <label> Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control update-input' placeholder='Email' value={email}/>
                </div>
                <div className='form-group update-group'>
                <label> Password: </label> 
                <input onChange={(e)=> setPassword(e.target.value)} type='password' className='form-control update-input' placeholder='Password' value={password}/>
                </div>
                <div className="form-group update-group">
<button onClick={(e)=> {
  e.preventDefault()
  
}} className="form-control btn btn-primary submit update px-3">Save Changes</button>
</div>
              </form>
            </div>
         </div>
      </Layout>
  )
}

export default Index