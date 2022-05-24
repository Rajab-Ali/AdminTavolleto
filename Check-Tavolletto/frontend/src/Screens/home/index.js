import React from 'react'
import Layout from '../../layout'
import Card from '../../components/StatCard'
import UserCard from '../../components/UserCard'
import RegionCard from '../../components/CountryCard'
import './home.css'
const Index = () => {
  return (
    <Layout>
         <div className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
              <div className='duration-cont'>
                  <h4>Last 30 Days</h4>
              </div>
            <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
            <h2 className="mb-5">Analytics</h2>
            <div className='Sales-analytics-cont'>
            <Card heading={'Total Sales'} value={'Euro 0.00'}/>
            <Card heading={'online App Session'} value= {'0'}/>
            <Card heading={'Returning customer rate'} value={'0'}/>
            <Card heading={'Total Tables Reserved'} value={'0'}/>
            </div>
            <RegionCard />
            <div className='col-md-12'>
            <h2 className="mb-5">User Analytics</h2>
            <UserCard heading={'Active Users'} active_heading={'Current active users'} avg_heading={'Average daily active users'} active_value={'700'} avg_value={'30'} />
            <UserCard heading={'Total Users'} active_heading={'Since App created'} avg_heading={'Average daily new users'} active_value={'4600'} avg_value={'23'}/>
            <UserCard heading={'Reserved Table'} active_heading={'In last 30 days'} avg_heading={'Average daily reserved tables'} active_value={'500'}  avg_value={'3'}/>
            </div>
            <div className='col-md-12'>
            <h2 className="mb-5">Restaurant Analytics</h2>
            <UserCard heading={'Active Restaurants'} active_heading={'Current active restaurants'} avg_heading={'Average daily active restaurants'} active_value={'700'} avg_value={'30'} />
            <UserCard heading={'Total Restaurants'} active_heading={'Since App Created'} avg_heading={'Average daily new Restaurants'} active_value={'4600'} avg_value={'23'}/>
            <UserCard heading={'User Satisfication'} active_heading={'Overall app rating'} avg_heading={'Improvement this month'} active_value={'4.2'}  avg_value={'+0.59' }/>
            </div>
          </div>
        </div>
      </div>   
            
    </Layout>
  )
}

export default Index