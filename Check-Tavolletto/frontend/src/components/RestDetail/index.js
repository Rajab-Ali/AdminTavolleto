import React from 'react'
import { useNavigate } from 'react-router-dom'
import './restdetail.css'
const Index = () => {
    const history = useNavigate()
  return (
    <div className='detail-div my-3'>
        <div className='col-md-10 detail-cont mx-auto'>
            <div className='restaurant-info'>
                <div className='header-cont'>
                    <h4>Restaurant Information</h4>
                </div>
                <div className='col-md-8 mt-3 mb-5'>
                    <div className='description-cont my-3'>
                        <p>Restaurant Name :</p>
                        <p>Kanoli Foodies</p>
                    </div>
                    <div className='description-cont my-3'>
                        <p>Owner Name :</p>
                        <p>Alvaro Morte</p>
                    </div>
                    <div className='description-cont my-3'>
                        <p>Account Since :</p>
                        <p>Jan 3, 2021</p>
                    </div>
                    <div className='description-cont my-3'>
                        <p>Owner Email:</p>
                        <p>KanoliFoodies@gmail.com</p>
                    </div>
                    <div className='description-cont my-3'>
                        <p>Contact info:</p>
                        <p>+446673864437</p>
                    </div>
                    <div className='description-cont my-3'>
                        <p>Tables Reserved:</p>
                        <p>7</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <button onClick={()=> history('/reserved-table-users')} className='btn btn-danger' > Details </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index