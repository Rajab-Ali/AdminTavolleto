import React from 'react'
import './booked.css'
import RestImg from '../../Images/resturant.png'
import Rating from "react-rating";

const Index = () => {
  return (
    <div className='col-md-5 my-4 mx-4 card rounded-4 booked-rest-cont'>
        <img src={RestImg} className="rest-img" alt ='restaurant Image' />
        <div className='ml-2 rest-booked-info'>
            <h3>Konali foods</h3>
            <Rating
                      style={{ color: "#FFBF00" }}
                      emptySymbol="fa fa-star-o"
                      fullSymbol="fa fa-star"
                      initialRating='3.2'
                      fractions={5}
                    />
            <p style={{fontSize:'14px'}}>Booked for Persons: 3</p>
        </div>
        <div className='ml-auto mr-4 date-visited'>
            <p style={{fontSize:'12px',color:'gray'}}>Date: 12/2/2021</p>
        </div>
    </div>
  )
}

export default Index