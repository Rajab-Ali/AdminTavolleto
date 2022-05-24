import React from 'react'
import Layout from '../../layout'
import UserCard from '../../components/UserCard'

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
            <h2 className="mb-5">Restaurant Analytics</h2>
            <UserCard heading={'Active Restaurants'} active_heading={'Current active restaurants'} avg_heading={'Average daily active restaurants'} active_value={'700'} avg_value={'30'} />
            <UserCard heading={'Total Restaurants'} active_heading={'Since App Created'} avg_heading={'Average daily new Restaurants'} active_value={'4600'} avg_value={'23'}/>
            <UserCard heading={'User Satisfication'} active_heading={'Overall app rating'} avg_heading={'Improvement this month'} active_value={'4.2'}  avg_value={'+0.59' }/>
            </div>

        </div>
    </Layout>
  )
}

export default Index