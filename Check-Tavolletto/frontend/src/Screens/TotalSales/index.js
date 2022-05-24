import React, { useState } from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { UserData } from '../../components/StatCard/data'
import './total.css' 
import Layout from '../../layout'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Index = () => {
    const [datefrom,setDateFrom] = useState('')
    const [dateto,setDateTo] = useState('')
    const [range,setRange] = useState([])
    const [date, setDate] = useState(new Date())
    const [toggleCalender, setToggleCalender] = useState(false)
    const [data,setData] = useState({
        labels:UserData.map((data)=> data.year),
        datasets:[
          {
              label:"TotalSales",
            data:UserData.map((data) => data.userGain),
            backgroundColor:['#ecf0f1','#50AF95','#f3ba2f','#2a71d0'],
            borderColor: "gray",
        }
        ],
      })
  return (
    <Layout>
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
         <div className='col-md-12 my-5 sales-main-cont'>
            <h1>Total Sales</h1>
              <p>Earning: Euro 0.0</p>
         </div>
         <div className='col-md-12 mx-3 my-3'>
             <div className='calender-filter'>
         <a onClick={()=> setToggleCalender(!toggleCalender)} class="btn btn-danger btn-resturant-menu">
                <i class="fa fa-calendar-o fa-2x " aria-hidden="true"></i>
              </a>
              
             </div>
              <div className='calender' style={{display:toggleCalender?'':'none'}}>
                <Calendar selectRange   onChange={(value,event)=> {
                    setRange([value])
                    setToggleCalender(!toggleCalender)
                }} value={date} />
              </div>
         </div>
         <div className='graph-detail-cont col-md-10'>{
             Array.isArray(range) && range.length?
             <>
             {/* <h4>Filter Date: </h4>
             <p className='ml-3'>From: {`${range[0][0].getDate()},${parseInt(range[0][0].getMonth())+1} , ${range[0][0].getFullYear()}`}  to: {`${range[1][0].getDate()},${parseInt(range[1][0].getMonth())+1} , ${range[1][0].getFullYear()}`}</p> */}
             </>:''
         }
         <Line 
        data={data}
        options={{
            responsive:true,
            maintainAspectRatio: false,
        }}
/>
         </div>
    </Layout>
  )
}

export default Index