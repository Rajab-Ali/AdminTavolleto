import React from 'react'
import signup from '../../Images/Vector.png'
import report from '../../Images/Vector1.png'
import bill from '../../Images/Vector2.png'
import AdPackages from '../../Images/Vector3.png'
import EditOffer from '../../Images/Vector6.png'
import ReservedChanges from '../../Images/Vector7.png'
import UserContent from '../../Images/Vector8.png'
import './notify.css'
import Layout from '../../layout'
import { useNavigate } from 'react-router-dom'
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
            <div className='my-4 mx-3'>
                <h2>Notifications</h2>
            </div>
              </div>
          <div className='mx-3 col-md-12'>
              <div className='notify-main-cont'>
              <h4 className='mt-5 text-center'>Restaurant</h4>
              {/* sign-up div */}
            <div onClick={()=> history('/signup-requests')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
                <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={signup}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Sign up requests: 
                     </h3>
                     <p>
                         hot foods and 17 others have sent sign-up requests
                     </p>
                 </div>
            </div>
              {/* Booked Add Packages */}
            <div onClick={()=> history('/booked-packages')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
                <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={AdPackages}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Booked Ad Packages 
                     </h3>
                     <p>
                         hot foods and 17 others have booked ad packages
                     </p>
                 </div>
            </div>

            </div>

              <div className='notify-main-cont'>
            <h4 className='mt-5 text-center'>Users</h4>
            <div onClick={()=> history('/reports')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
            <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={report}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Reports: 
                     </h3>
                     <p>
                        you have 12 report to respond to.
                     </p>
                 </div>
            </div>

            <div onClick={()=> history('/reservation-changes')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
            <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={ReservedChanges}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Reservation Changes 
                     </h3>
                     <p>
                        Konali foods change no. of seats to 5.
                     </p>
                 </div>
            </div>

            </div>

                <h2 className='mt-5'>Reporting:</h2>
                <div className='notify-main-cont'>
              <h4 className='mt-5 text-center'>User Content</h4>
              <div onClick={()=> history('')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
            <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={UserContent}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Video Reviews: 
                     </h3>
                     <p>
                        3 users have uploaded their video reviews.
                     </p>
                 </div>
            </div>
                </div>
                 
              <div className='notify-main-cont'>
              <h4 className='mt-5 text-center'>Restaurant bill Payment</h4>
            <div onClick={()=> history('/billpayment')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
            <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={bill}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Bill Payments: 
                     </h3>
                     <p>
                        3 restaurants haven't paid their bill.
                     </p>
                 </div>
            </div>
            
            <div onClick={()=> history('/edit-table-offer')} className='signup-notify-cont col-md-10 mt-4 mx-auto mb-4'>
            <div className='img-notify-cont'>
                    <img className='signup-notify-img' src={EditOffer}/>
                 </div>
                 <div className='signup-detail-cont col-md-7 mx-4'>
                     <h3>
                         Edit Table Offers: 
                     </h3>
                     <p>
                        5% off on every table reserved.
                     </p>
                 </div>
            </div>
            </div>
            
            </div>
          </div>
      </Layout>
    
  )
}

export default Index
