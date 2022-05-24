import React from 'react'
import Layout from '../../layout'
import SalesCard from '../../components/StatCard'
const Index = () => {
  return (
    <Layout>
        
        <div className='row'>
            <div className='col-md-12 '>
            <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
            <div className='my-4 mx-3'>
              <h3>Sales Analytics</h3>
            </div>
            </div>
        </div>
        <div className='col-md-12 my-5'>
        <SalesCard heading={'Total Sales'} value={'Euro 0.00'}/>
            <SalesCard heading={'online Store Session'} value= {'0'}/>
            <SalesCard heading={'Returning customer rate'} value={'0'}/>

        </div>
    </Layout>
  )
}

export default Index