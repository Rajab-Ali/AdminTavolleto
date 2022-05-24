import React, { useState } from 'react'
import './edittable.css'
import Layout from '../../layout'
import DatePicker from '../../components/DatePicker';

const Index = () => {
    const [offerValue , setOffer] = useState()
    const [showCalender, setShowCal] = useState(false)
    const [option,setOption] = useState()
    const [inputField, setInput] = useState(['input-0'])
    const [userName , setName] = useState()
    const [allUser, setAllUsers] = useState([])
    const [date,setDate] = useState(new Date())
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
            <div className='mb-5 pb-5 col-md-12'>
            <h2 className='mt-3 mb-5'>Table Offers: </h2>
               <div className='my-3 mx-4 datepicker-cont'>
                    <h4 style={{textAlign:'left',marginTop:'20px',marginBottom:'20px'}}> Select Date Range for Offer. </h4> 
               <button onClick={() => setShowCal(!showCalender)} className='btn btn-warning btn-resturant-menu'>
                <i class="fa fa-calendar-o fa-2x "></i>
               </button>
              {
                  showCalender?<DatePicker date={date} setDate={setDate} />:''
              }
                
               </div>

                <div className='my-4 col-md-5'>
                <form>    
                <div className='form-group update-group'>
                    <label> Enter Offer in Percentage </label>
                    <input onChange={(e)=> setOffer(e.target.value)} type='text' className='form-control update-input' placeholder='Enter Offer here....' value={offerValue}/>
                </div> 
                <div className=' my-4 form-group update-group'>
                    <label>Offer Valid for </label>
                <select value={option} onChange={(e)=> setOption(e.target.value)} class="form-select update-input" aria-label="Default select example">
                <option value="" selected >Select Option</option>
                    <option value="Everyone">Everyone</option>
                    <option value="Specific Users">Specific Users</option>
                    <option value="UserPoints">User Points</option>
                </select>    
                </div>
                {
                    option==='Specific Users'?
                    inputField.map(input => <div className='form-group update-group'>
                    <input onChange={(e)=> {

                        setAllUsers([...allUser,e.target.value])
                    }} className='form-control update-input' type='text' placeholder='Enter User Name here ...' value={userName} />
                    </div>):''
                }
                <div style={{width:'100px', display:option==='Specific Users'? "":'none' }}>
                <button onClick={(e)=>{
                        e.preventDefault()
                        setInput([...inputField,`input-${inputField.length}`])
                    }} className='form-control btn btn-primary submit update px-3'>Add More</button>
                </div>
                <div className='mt-5 mb-5 form-group update-group'>
                    <button onClick={(e)=>{
                        e.preventDefault()
                    }} type='submit' className="form-control btn btn-primary submit update px-3"> Place Offer </button>
                </div>
                </form>    
                </div>
            </div>  
          </div>
      </Layout>
  )
}

export default Index