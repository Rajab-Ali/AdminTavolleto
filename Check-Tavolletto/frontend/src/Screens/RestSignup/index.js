import React from 'react'
import './restinfo.css'
import Layout from '../../layout'
import Request from '../../components/signupRequest'
const Index = () => {
  return (
      <Layout>
        <div className='col-md-12'>
        <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
        <div className='col-md-12'>
            <h2>
                Signup Request:
            </h2>
            </div>
              <div className='col-md-10 my-5 mx-3'>
                <Request />
                <Request />
                <Request />
              </div>
        </div>
      </Layout>
  )
}

export default Index;