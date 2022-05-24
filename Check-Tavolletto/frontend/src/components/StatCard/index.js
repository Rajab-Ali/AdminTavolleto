import React , {useState} from 'react'
import './analysis.css'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { UserData } from './data'

const Card = ({heading,value}) => {
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
      <div className='col-md-4 card-cont col-sm-4 my-2'>
    <div className='card rounded py-2 my-1'>
        <div className='card-heading-cont'>
            <p>{heading}</p>
            <p className='tag-button'>view Report</p>
        </div>
        <div className='card-value-cont'>
            <h3>
            {value} 
            </h3>
        </div>
            <div className='scroll-tag-cont'>
            <div class="horizontal-scroll-item">
                - Today
            </div>
            <div class="horizontal-scroll-item">
                - This Month
            </div>
            <div class="horizontal-scroll-item">
                -  This Year
            </div>
            <div class="horizontal-scroll-item">
                -  Overall
            </div>
            </div>
        <div className='stats-cont'>
            <div className='graph-cont'>
            <Line 
        data={data}
        options={{
            responsive:true,
            maintainAspectRatio: false,
            
        }}
/>
            </div>
        </div>
    </div>
      </div>
  )
}

export default Card