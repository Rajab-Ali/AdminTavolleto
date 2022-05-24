import React from 'react'
import Layout from '../../layout'
import Table from '../../components/packageTable'
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
            <div className='my-5 col-md-12'>
                <h2 style={{fontWeight:'900'}}>Ad Packages:</h2>
                <div className='mt-5 mb-5 col-md-12'>
                    <Table />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Index