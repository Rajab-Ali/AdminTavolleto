import React from 'react'
import Layout from '../../layout'
import UserCard from '../../components/UserCard'
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
        <UserCard heading={'Active Users'} active_heading={'Current active users'} avg_heading={'Average daily active users'} active_value={'700'} avg_value={'30'} />
            <UserCard heading={'Total Users'} active_heading={'Since App created'} avg_heading={'Average daily new users'} active_value={'4600'} avg_value={'23'}/>
            <UserCard heading={'Reserved Table'} active_heading={'In last 30 days'} avg_heading={'Average daily reserved tables'} active_value={'500'}  avg_value={'3'}/>
        </div>
    </Layout>
  )
}

export default Index