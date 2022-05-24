import React from 'react'
import Layout from '../../layout'
import './impression.css'
const Index = () => {
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
              <h2 className='mx-3 mb-4'>Company Profile</h2>
              <div className='col-md-8 p-5 my-5 mx-auto impression-cont'>
         <div className='detail-div  my-3'>
        <div className=' detail-cont mx-auto'>
            <div className='restaurant-info'>
                <div className='col-md-8 header-cont'>
                    <h4>Impression Section</h4>
                </div>
                <div className='mt-3 mb-5 earning-cont'>
                    <div className='total-today-earning'>
                        <h4 className='text-left m-2'>Company Name</h4>
                        <p className='value-cont p-3'>Tavolleto</p>
                    </div>
                    <div className='total-today-earning'>
                        <h4 className='text-left m-2'>Location</h4>
                        <p className='value-cont p-3'>berlin, Germany</p>
                    </div>
                    <div className='total-today-earning'>
                        <h4 className='text-left m-2'>Fax</h4>
                        <p className='value-cont p-3'>000000</p>
                    </div>
                    <div className='total-today-earning'>
                        <h4 className='text-left m-2'>Email</h4>
                        <p className='value-cont p-3'>admin@gmail.com</p>
                    </div>
                    <div className='total-today-earning'>
                        <h4 className='text-left m-2'>Managing Director</h4>
                        <p className='value-cont p-3'>Shadab</p>
                    </div>
                    <div className='total-today-earning'>
                        <h4 className='text-left m-2'>Legal</h4>
                        <p className='value-cont p-3'>District Court, ZZZ 111</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>

            </div>
        </div>
    </Layout>
  )
}

export default Index