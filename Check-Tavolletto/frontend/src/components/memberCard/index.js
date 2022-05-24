import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './memberCard.css'
const Index = () => {
    const [mouseEnter, setMouse] = useState(false)
    const history = useNavigate()
  return (
    <div onMouseEnter={()=> setMouse(true)} onMouseLeave={() => setMouse(false)} className='m-4 col-md-5'>
        <div style={{height:'220px',backgroundColor:mouseEnter?"#FFBF00":'white',color:mouseEnter?'white':'black'}} className='card rounded-4 p-3'>
            <div className='member-info-cont'>
                <h4>Membership Name</h4>
                <p style={{flex:'0.8', overflow:'scroll',textOverflow:'ellipsis'}}>Here is the description of this membership package. In this package we will advertise ur product.</p>
                <p>Price: <span style={{color:mouseEnter?'black':'', marginLeft:'5px'}} className='member-card-price'>120Euro</span></p>
            </div>
        </div>
        <div className='edit-btn-cont'>
        <button onClick={()=> history('/edit-membership')} className="btn  btn-icon-blog" >
              <i class="fa fa-light fa-pencil "></i>
              </button>
        </div>
    </div>
  )
}

export default Index