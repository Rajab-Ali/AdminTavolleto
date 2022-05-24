import React from 'react'
import Profile from '../../Images/userImg.png'
import Rating from 'react-rating'
import './reportCard.css'
const Index = ({usernameid,iconid}) => {
  return (
    <div className='col-md-9 mx-auto my-4 p-3'>
        <div className='comment-section'>
        <div className='profile-cont'>

        <div className='user-profile'>
            <img src={Profile} alt='Profile Image' />
        </div>
        <div className={'col-md-6 username-cont report-cont'} >
            <h5>UserName</h5>
            <Rating
                      style={{ color: "#FFBF00" }}
                      emptySymbol="fa fa-star-o"
                      fullSymbol="fa fa-star"
                      />
        </div>
        <div  className={'email-btn-cont reply-email-cont report-cont-button'} >                    
            <button className='btn btn-warning'><i class="fa fa-envelope-o"></i></button>

    </div>
        </div>
        <div className='col-md-9 comment-cont'>
            <p>comparitively OK, need improvements in  service. comparitively OK, need improvements in  servicedsdidf.</p>
        </div>
        
        </div>
    <div className='col-md-10'>
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