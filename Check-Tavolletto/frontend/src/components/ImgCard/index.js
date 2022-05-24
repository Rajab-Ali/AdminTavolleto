import React from 'react'
import dishPic from "../../Images/dishPic.png";
import './imgcard.css'
const Index = () => {
  return (
    <div className="col-md-4 my-4">
          <div className="card-style">
            <img src={dishPic} className="img-fluid m-3 img-desc" />
          </div>
        </div>
  )
}

export default Index