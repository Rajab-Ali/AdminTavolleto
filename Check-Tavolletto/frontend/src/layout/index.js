import React ,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Index = ({children}) => {
    const [check,setCheck] = useState()
    
  return (
    <div className='viewport'>
    
            <Sidebar check={check} setCheck={setCheck}  />
            <div className='content' style={{pointerEvents:check?'none':'', opacity: check?'0.7':'1',position:check?'fixed':''}}>
                <Navbar />
                <div className='container-fluid'>
                    {
                    children
                    }    
                </div>
            </div>
        </div>
  )
}

export default Index