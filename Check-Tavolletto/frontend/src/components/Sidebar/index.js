import React, { useContext } from 'react'
import './sidebar.css'
import logo from '../../Images/logo.png'
import { useNavigate } from 'react-router-dom';
import { UIContext } from '../../context/UIcontext';

 function Index({check,setCheck}) {
  const history = useNavigate()
  const {profiletoggle,changeState} = useContext(UIContext)
    return (
    <div id='sidebar-cont'>
      <input type='checkbox' checked={check} id='check' />
      <label for='check'>
        <i className='fa fa-bars' onClick={()=> setCheck(true)} id='btn-bars'></i>
        <i className='fa fa-times' onClick={()=> setCheck(false)} id='cancel'></i>
      </label>

      <div className="sidebar">
            <img src={logo} alt="logo" className="logo m-4" />
  
            <div className="nav">
              {
               profiletoggle?<ul>
                <li onClick={()=> {
                  changeState(false)
                  console.log(profiletoggle);
                  history('/')
                  }} className='btn-tabs'>Dashboard</li>
                  <li onClick={()=> history('/update-profile')} className='btn-tabs'>Update Profile</li>
                  <li onClick={()=> history('/update-faq')} className='btn-tabs'>Update FAQ</li>
                  <li onClick={()=> history('/update-privacy')} className='btn-tabs'>Privacy & Security</li>
                  <li onClick={()=> history('/impression-section')} className='btn-tabs'>Impression Section</li>
                  <li onClick={()=> history('/membership')} className="btn-tabs">Membership Section</li>
                  <li onClick={() => history('/ad-packages-detail')} className='btn-tabs'>Add Packages</li>
                  <li className='btn-tabs'>Logout</li>
                </ul>:
                <ul>
                <li onClick={()=> {
                  changeState(true)
                  console.log(profiletoggle);
                  history('/profile')
                  }} className='btn-tabs'>Profile</li>
              <li onClick={()=> {
                
                history('/')
                }} className="btn-tabs">
                Show All
              </li>
              <li onClick={()=> history('/sales-analytics')} className="btn-tabs">
                Sales Analytics
              </li>
              <li onClick={()=> history('/user-analytics')} className="btn-tabs">
                User Analytics
              </li>
              <li onClick={()=> history('/All-Users')} className="btn-tabs ">
                View Users
              </li>
              <li onClick={() => history('/restaurant-analytics')} className="btn-tabs">
                Resturant Analytics
              </li>
              <li onClick={() => history('/manage-restaurants')} className="btn-tabs">
                Manage Resturants
              </li>
              <li onClick={()=> history('/notifications')} className="btn-tabs ">
                Notifications
              </li>
              <li onClick={()=> history('/blogs')} className="btn-tabs">
                Blogs Feed
              </li>
              </ul>
              }
              
            </div>
        </div>

    </div>                        
    );
  }
  
  export default Index;