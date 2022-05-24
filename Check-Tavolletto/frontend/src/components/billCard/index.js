import React from 'react'
import profileImg from '../../Images/resturant.png'
import './billcard.css'
const Index = ({name, address,mpayment,personpayment,membership}) => {
  return (
    <div className='col-md-8 m-5'>
        <div className='card rounded-4 px-4'>
            <div style={{position: 'absolute', top:'-6px',right:'-1px'}} className='d-flex justify-content-center'><p className='membership-cont px-3'>Membership:<span style={{ marginLeft:'10px'}}>{membership}</span> </p></div>
            <div className='bill-cont'>
                <img src={profileImg} className = 'bill-cont-rest-img' alt='Restaurant Image' />
                <div className='bill-cont-rest-info text-center'>
                    <h3>{name}</h3>
                    <p>{address}</p>
                    <p style={{color:'#FF8A56', fontSize:'16px', fontWeight:'bold'}}>Pending Payment:<span style={{marginLeft:'10px', color:'black',fontSize:'12px',fontWeight:'lighter'}}>{membership==='monthly'?`${mpayment} Euro`:`${personpayment}Euro`}</span></p>
                        
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