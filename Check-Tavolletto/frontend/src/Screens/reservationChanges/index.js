import React from 'react'
import './reservedchange.css'
import Layout from '../../layout'
import ChangeCard from '../../components/changeCard'
const Index = () => {
  return (
      <Layout>
          <div className='row'>
              <div className='col-md-12'>
              <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
              </div>
              <div className='col-md-12 my-4'>
                <h2 className='mb-5'>Reservation Changes: </h2>
                <div className='col-md-12'>
                  <ChangeCard />                    
                </div>
              </div>
          </div>
      </Layout>
  )
}

export default Index