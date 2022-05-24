import React from 'react'
import Layout from '../../layout'
import ReportCard from '../../components/reportCard'
import './report.css'
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
            <div className='col-md-12 mt-2 mb-5'>
              <h2> Reports: </h2>
              <div className='reports-cont my-3'>
                 <ReportCard usernameid={true}  iconid={true}/>
                 <ReportCard />
                 <ReportCard />
                 <ReportCard />

              </div>
            </div>

        </div>
    </Layout>
  )
}

export default Index