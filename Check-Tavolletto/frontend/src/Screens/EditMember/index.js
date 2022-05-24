import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout'
import './editmember.css'
const Index = () => {
    const history = useNavigate()
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
            <div className='col-md-12 my-5'>
                <h2>Edit Memberships: </h2>
                <div className='col-md-8  mx-auto post-blog-cont'>
                        <form className='form-update-profile'>
                            <div className='form-group update-group'>
                                <input type='text' className='form-control update-input' placeholder='Write down the Membership Title'  />
                            </div>
                            <div className='form-group update-group'>
                                <input  type='text' className='form-control update-input' placeholder='Enter Price here ....'  />
                            </div>
                            <div className='form-group update-group'>
                <textarea className="form-control privacy-textarea form-control-lg mb-4" rows="5" placeholder="  Write description here....."></textarea>
                  </div>   
                            <div className="form-group update-group">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    history('/membership')
                                }} className="form-control btn btn-primary submit update px-3">Post</button>
                            </div>
                        </form>
                    </div>
            </div>

        </div>
    </Layout>
  )
}

export default Index