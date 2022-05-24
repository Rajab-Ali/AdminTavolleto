import React from 'react'
import Layout from '../../layout'
import UserReview from '../../components/UserReview'
import logo from '../../Images/Restinfoimg.png'
import RestImg from '../../Images/RestaurantImg.png'
import Rating from 'react-rating'
import Profile from '../../Images/adminProfile.png'
import RatingSun from '../../Images/TavolettoSun.png'
import './review.css'
const Index = () => {
  return (
    <Layout>
      <div className='row'>
        <div className="col-md-10 ">
          <hr
            style={{
              color: "#DEDEDE",
              backgroundColor: "#DEDEDE",
              height: 0.5,
              borderColor: "#DEDEDE",
            }}
          />
          <div className='col-md-8 my-4 mx-4'>
            <div className='review-head-cont'>
              <img src={logo} alt='Restaurant Logo' />
              <h2>Konali Foods</h2>
            </div>
            <div className='review-rating-cont mt-4'>
              <p className='mr-4'>Overall Rating: </p>
              <Rating
                style={{ color: "#FFBF00" }}
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star "
                fractions={0.3}
              />
            </div>
            <div className='admin-rating-cont'>
            <div className='admin-rating' style={{backgroundImage:`url(${RatingSun})`}}>
              <h2>3.1</h2>
            </div>
            </div>
          </div>
          <div className='col-md-3 my-3 mx-2'>
            <div className='review-img-cont'>
              <img src={RestImg} alt='Restaurant' />
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-10 mb-5 people-review-cont'>
        <h4 className='pb-5'>Reviews:</h4>
        <UserReview />
        <UserReview />

        <div className='col-md-10 mx-auto'>
          <div className='profile-cont justify-content-start'>

            <div className='user-profile'>
              <img className='admin-img' src={Profile} alt='Profile Image' />
            </div>
            <div className='col-md-6 admin-cont'>
              <h5>Admin</h5>
              <Rating
                style={{ color: "#FFBF00" }}
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
              />
            </div>
          </div>
          <div className='mx-auto add-comment-section'>
              <input className='review-input' type='text' placeholder='write review.....' />
              <div className='review-btn-cont'>
                <button className='btn btn-review'><i class="fa fa-paperclip"></i></button>
                <button className='btn btn-review'><i class="fa fa-paper-plane"></i></button>
                
              </div>
          </div>

          </div>
          <div className='col-md-10 mx-auto mt-3 mb-5'>
          <hr
            style={{
              color: "#DEDEDE",
              backgroundColor: "#DEDEDE",
              height: 0.5,
              borderColor: "#DEDEDE",
            }}
          />            
          </div>
        </div>
    </Layout>
  )
}

export default Index