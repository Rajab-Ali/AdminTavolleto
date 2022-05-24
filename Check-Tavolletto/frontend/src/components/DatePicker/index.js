import React from 'react'
import Calender from 'react-calendar'
import './datepicker.css'

const Index = ({date,setDate}) => {
  return (
    <div style={{zIndex:'2',marginTop:'3px'}} className='calendar-container'>
        <Calender onChange={setDate} value={date} selectRange={true} />

    </div>
  )
}

export default Index