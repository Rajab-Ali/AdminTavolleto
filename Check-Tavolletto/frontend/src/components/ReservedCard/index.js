import React from 'react'
import './reserved.css'
const Index = ({personReserved}) => {
  return (
    <div className='col-md-5 m-4'>
        <div className='card rounded-4 p-3'>
            <div className='reserved-card-info'>
                <h4>User Name</h4>
                <p>Table Reserved for persons: {personReserved}</p>
            </div>
            <div className='ml-auto mr-4 date-visited'>
            <p style={{fontSize:'12px',color:'gray'}}>Date: 12/2/2021</p>
        </div>
        </div>
    </div>
  )
}

export default Index