import React from 'react'
import Layout from '../../layout'
import './member.css'
import MemberCard from '../../components/memberCard'
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
              <h2>Memberships: </h2>
              <div className='my-5 member-cont'>
                <MemberCard />
                <MemberCard />
                <MemberCard />

              </div>
            </div>
          </div>
      </Layout>
  )
}

export default Index