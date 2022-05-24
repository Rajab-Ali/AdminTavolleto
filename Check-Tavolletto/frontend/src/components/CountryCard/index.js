import React from 'react'
import './country.css'
const Index = () => {
  return (
    <div className='col-md-4 col-sm-4 my-2'>
        <div className='card rounded py-2 my-1'>
        <div className='card-heading-cont'>
            <p>Most users by Region</p>
            <p className='tag-button'>view Report</p>
        </div>
        <div className='card-value-cont region-cont'>
            <div className='region-info'> 
            <h5>
                Germany 
            </h5>
            <p>40%</p>
            </div>
            <div className='region-info'>
            <h5> France </h5>
            <p>40%</p>
            </div>
            <div className='region-info'>
            <h5>Austria </h5>
            <p>40%</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Index