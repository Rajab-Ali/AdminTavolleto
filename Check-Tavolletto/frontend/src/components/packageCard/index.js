import React from 'react'
import './package.css'
import profileImg from '../../Images/resturant.png'
const Index = ({name,address,adpackage,price}) => {
  return (
    <div className='col-md-8 m-5'>
        <div className='card rounded-4 px-4'>
            <div style={{position: 'absolute', top:'-15px',right:'-1px'}} className='package-cont d-flex justify-content-center'><p className='membership-cont px-3'><span style={{ marginLeft:'10px',fontSize:'12px', fontWeight: 'lighter',wordBreak:'break-all'}}>{adpackage}</span> </p></div>
            <div className='bill-cont'>
                <img src={profileImg} className = 'bill-cont-rest-img' alt='Restaurant Image' />
                <div className='bill-cont-rest-info text-center'>
                    <h3>{name}</h3>
                    <p>{address}</p>
                    <p style={{color:'#FF8A56', fontSize:'16px', fontWeight:'bold'}}>Price:<span style={{marginLeft:'10px', color:'black',fontSize:'12px',fontWeight:'lighter'}}>{`${price} Euro`}</span></p>
                    
                </div>
                <div className='email-btn-cont'>
                    <button className='btn btn-warning'><i class="fa fa-envelope-o"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index