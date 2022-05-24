import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuCard.css'
const Index = ({heading, route}) => {
  const history = useNavigate()
  return (
    <div className='btn-div my-3'>
    <div className='col-md-8 btn-rest-cont mx-auto'>
        <button  onClick={()=> history('/restaurant-menuDiscription')} type="button" className='btn btn-menu'>{heading}</button>   
    </div>
    
    </div>
  )
}

export default Index