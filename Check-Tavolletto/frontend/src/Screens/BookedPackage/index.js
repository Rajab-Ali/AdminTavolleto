import React from 'react'
import Layout from '../../layout'
import PackageCard from '../../components/packageCard'
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
            <h2 className="mb-5">Booked Ad Packages </h2>
            </div>
            <div className='col-md-12'>
                <h3 className='mt-5 text-center'>Packages Detail</h3>
                <div className='d-flex flex-column align-items-center'>
                    <PackageCard name={'Konali Foods'} address={'Hostel City, street#7,islamabad,Pakistan'} adpackage={'Know me better on tuesday'} price={49} />
                    <PackageCard name={'konali Foods'} address={'F-4, street#17,islamabad,Pakistan'} adpackage={'Efficient for 3 Days'} price={130}/>
                    <PackageCard name={'konali Foods'} address={'H-8, street#2,islamabad,Pakistan'} adpackage={'Update everything in 2 weeks'} price={130}/>


                </div>
            </div>
            
        </div>
    </Layout>
  )
}

export default Index