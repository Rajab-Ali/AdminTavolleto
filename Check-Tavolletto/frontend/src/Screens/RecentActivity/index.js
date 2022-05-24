import React from 'react'
import './recentActivity.css'
import Layout from '../../layout'
import RestInfo from '../../components/RestInfo'
import BtnCard from '../../components/RecentCard'
const Index = () => {
  return (
    <Layout>
        <RestInfo />
        <div className="row mb-5">
          <div className="col-md-10 d-flex flex-column">
          <div className="Description ml-5 mt-5">
            <h4>Description:</h4>
            <p>Are you sad? Order now a HAPPY meal :)</p>
          </div>
          <div className="Description ml-5 mt-2">
            <h4>Address:</h4>
            <p>14th street, f-8, islamabad, pakistan.</p>
          </div>
          </div>
          </div> 
        <div className='col-md-10 my-5'>
        <div className='recent-cont'>
            <BtnCard/>
            <BtnCard/>
            <BtnCard/>

        </div>
        </div>
    </Layout>
  )
}

export default Index