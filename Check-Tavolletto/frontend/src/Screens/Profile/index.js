import React from 'react'
import Layout from '../../layout'
import userImg from '../../Images/userImg.png'
import './profile.css'

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
         <div className='col-md-12 my-4 profile-img-cont'>
             <img src={userImg} className="profile-img" alt="Profile Image" />
             <h2 className='Profile-name'> Admin </h2>
             <p>rajaali810@gmail.com</p>
         </div>
              <div className='col-md-8 mb-5 mx-auto'>
         <div className='detail-div my-3'>
        <div className=' detail-cont mx-auto'>
            <div className='restaurant-info'>
                <div className='col-md-8 header-cont'>
                    <h4>Earnings</h4>
                </div>
                <div className='my-4 earning-cont'>
                    <div className='total-today-earning'>
                        <h4>Total Earning Today</h4>
                        <h4 className='value-cont p-3'>5$</h4>
                    </div>
                    <div className='total-today-earning'>
                        <h4>Total Earning This Week</h4>
                        <h4 className='value-cont p-3'>50$</h4>
                    </div>
                    <div className='total-today-earning'>
                        <h4>Total Earning</h4>
                        <h4 className='value-cont p-3'>500$</h4>
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