import React, { useState } from 'react'
import Layout from '../../layout'
import './faq-update.css'
const Index = () => {
    const [userQuestion , setUserQuestion] = useState('')
    const [userAns, setUserAns] = useState('')
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
            <div className='col-md-12 my-4'>
              <h2 className='mb-5'>Update FAQ's for User</h2>
              <div className='col-md-8 mx-auto form-cont'>
              <form className='form-update-profile'>
                <div className='form-group update-group'>
                    <input onChange={(e)=> setUserQuestion(e.target.value)} type='text' className='form-control update-input' placeholder='Write Questions here' value={userQuestion}/>
                </div>
                <div className='form-group update-group'>
                <input onChange={(e) => setUserAns(e.target.value)} type='text' className='form-control update-input' placeholder='Write Answers here' value={userAns}/>
                </div>
 
                <div className="form-group update-group">
<button onClick={(e)=> {
  e.preventDefault()
  
}} className="form-control btn btn-primary submit update px-3">Add FAQ</button>
</div>
              </form>
            </div>
            <h2 className='mb-5'>Update FAQ's for Admin</h2>
              <div className='col-md-8 mx-auto form-cont'>
              <form className='form-update-profile'>
                <div className='form-group update-group'>
                    <input onChange={(e)=> setUserQuestion(e.target.value)} type='text' className='form-control update-input' placeholder='Write Questions here' value={userQuestion}/>
                </div>
                <div className='form-group update-group'>
                <input onChange={(e) => setUserAns(e.target.value)} type='text' className='form-control update-input' placeholder='Write Answers here' value={userAns}/>
                </div>
 
                <div className="form-group update-group">
<button onClick={(e)=> {
  e.preventDefault()
  
}} className="form-control btn btn-primary submit update px-3">Add FAQ</button>
</div>
              </form>
            </div>
            </div>

            </div>
        </div>
    </Layout>
  )
}

export default Index