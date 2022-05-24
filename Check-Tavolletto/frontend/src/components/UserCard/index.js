import React from 'react'
import './userAnalytic.css'
const Index = ({heading ,active_heading, avg_heading, active_value, avg_value }) => {
  return (
    <div className='col-md-4'>
    <div className='card rounded py-2 my-2'>
        <div className='heading-cont'>
            <h3 className='tag-head tag-button'>{heading}</h3>
        </div>
        <div className='my-2 mx-3'>
            <p className='w-50'>{active_heading}</p>
        </div>
        <div className='value-cont mx-3'>
            <h4>
            {active_value} 
            </h4>
            <div className='line-cont'>
            </div>
            
        </div>
        <div className='my-2 mx-3'>
            <p className='w-50'>{avg_heading}</p>
        </div>
        <div className='value-cont mx-3'>
            <h4>
            {avg_value} 
            </h4>
            <div className='line-cont'>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Index