import React from 'react'
import Layout from '../../layout'
import ReservedCard from '../../components/ReservedCard'
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
            <div className='col-md-12 my-5'>
              <h2>Table Reserved: </h2>
              <div className='table-reserved-cont'>
                <ReservedCard personReserved = {7} />
                <ReservedCard personReserved = {5} />
                <ReservedCard personReserved = {3} />
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default Index