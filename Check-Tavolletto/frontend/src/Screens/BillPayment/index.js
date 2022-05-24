import React from 'react'
import Layout from '../../layout'
import BillCard from '../../components/billCard'
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
            <h2 className="mb-5">Bill Payments: </h2>
            </div>
            <div className='col-md-12'>
                <h3 className='text-center'>Pending Restaurant Payments</h3>
                <div className='d-flex flex-column align-items-center'>
                <BillCard name={'Restaurant Name'} address={'14th street,F-8,islamabad,Pakistan'} mpayment={'30'} membership={'monthly'} />
                <BillCard name={'Restaurant Name'} address={'14th street,F-8,islamabad,Pakistan'} personpayment={120*1.9} membership={'per-person'}/>
                <BillCard name={'Restaurant Name'} address={'14th street,F-8,islamabad,Pakistan'} mpayment={'30'} membership={'monthly'}/>
                </div>
            </div>
            
        </div>
    </Layout>
  )
}

export default Index