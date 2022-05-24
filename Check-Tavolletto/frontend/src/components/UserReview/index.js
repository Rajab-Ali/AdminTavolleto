import React from 'react'
import Profile from '../../Images/userImg.png'
import Rating from 'react-rating'
import ReviewImg from '../../Images/BlogDisc.png'
import './userreview.css'
const Index = () => {
  return (
      <div className='col-md-10 mx-auto'>
    <div className='comment-section'>
        <div className='profile-cont'>

        <div className='user-profile'>
            <img src={Profile} alt='Profile Image' />
        </div>
        <div className='col-md-6 username-cont'>
            <h5>UserName</h5>
            <Rating
                      style={{ color: "#FFBF00" }}
                      emptySymbol="fa fa-star-o"
                      fullSymbol="fa fa-star"
                      />
        </div>
        <div className='trash-btn-cont'>
            <button className='btn'><i className='fa fa-trash-o fa-2x'></i></button>
    </div>
        </div>
        <div className='col-md-12 comment-cont'>
            <p>comparitively OK, need improvements in  service. comparitively OK, need improvements in  servicedsdidf.</p>
            <img className='review-img' src={ReviewImg} alt='User Review' />
        </div>
        
        </div>
        <div className='col-md-12'>
            <hr style={{
                marginLeft:'10px',
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}/>
        </div>
        </div>
  )
}

export default Index