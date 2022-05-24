import React from 'react'
import './change.css'
const Index = () => {
  return (
    <div className='mx-auto col-md-10'>
      <div className='card rounded-4 p-3 '>
        <div className='rest-change-cont'>
          <h4>Restaurant:</h4>
          <div className='change-info'>
          <p>Konali Foods</p>
          <p className='ml-5 change-cont-email'>konalifoods@gmail.com</p>
          </div>
        </div>
        <div className='rest-change-cont'>
          <h4>Reserved by:</h4>
        <div className='change-info'>
          <p>Awais Jutt</p>
          <p className='ml-5 change-cont-email'>rajabali810@gmail.com</p>
        </div>
        </div>
        <div className='rest-change-cont'>
            <h4 style={{flex:'0.4'}}>Seats reserved initially: </h4>
            <div style={{flex:'0.2'}} className='change-info'>
                <p>9 persons</p>
            </div>
        </div>
        <div className='rest-change-cont'>
            <h4 style={{flex: '0.4'}}>seats changed to: </h4>
            <div style={{flex: '0.2'}} className='change-info'>
                <p>5 persons</p>
            </div>
        </div>
        <div className='ml-auto mr-4 date-visited'>
            <p style={{fontSize:'12px',color:'gray'}}>Date: 12/2/2021</p>
        </div>
    </div>
    </div>
  )
}

export default Index