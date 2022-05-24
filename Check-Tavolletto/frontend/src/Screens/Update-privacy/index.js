import React, { useState } from 'react'
import './privacy.css'
import Layout from '../../layout'
const Index = () => {
  const [update_privacy,setUpdate]= useState(false)
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
        <div className='col-md-12 my-4'>
              <h2>Privacy And Security Terms: </h2>
        </div>
        <div className='col-md-12 my-5'>
            <div className='view-terms-cont' style={{display:update_privacy?'none':''}}>
                <div className='col-md-10 my-4 mx-auto'>
                  <p className='terms-text'>
                  Tavolleta built the app as open source free ad-supported app. This SERVICE is provided by Tavolleta and is intended for use as is.

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.

If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that We collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at unless otherwise defined in this Privacy Policy.
                  </p>
                </div>
                <div className='privacy-btn-cont'>
                  <button onClick={()=> setUpdate(true)} className='btn btn-warning p-3'>Update Privacy And Security Terms</button>
                </div>
            </div>
            <div className='update-terms-cont' style={{display:update_privacy?'':'none'}} >
              <div className='col-md-8 my-4 mx-auto'>
                <form>
                  <div className='form-group'>
                <textarea className="form-control privacy-textarea form-control-lg mb-4" rows="5" placeholder="  New Privacy and Security Terms....."></textarea>
                  </div>
                  <div className='form-group justify-content-end'>
                    <button onClick={(e)=> {
                      e.preventDefault()
                      setUpdate(false)
                    }} type='submit' className='btn btn-warning px-3'>Update</button>
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