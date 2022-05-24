import React from 'react'
import RestImg from '../../Images/userImg.png'
import './signup.css'
const Index = () => {
  return (
    <div className='col-md-10'>
        <div className='card request-cont m-2 p-3'>
            <img src={RestImg} className='signup-rest-img' alt='Restaurant Image'/>
            <div className='rest-info-cont'>
                <h3>Restaurant Name</h3  >
                <p>rajabali@gmail.com</p>
            </div>
            <div className='btns-cont'>
                <button className='btn-accept'><i className = 'fa fa-check'></i></button>
                <button className='btn-reject'><i className = 'fa fa-times'></i></button>
            </div>
        </div>
    </div>
  )
}

export default Index