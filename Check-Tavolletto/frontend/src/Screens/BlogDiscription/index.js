import React, { useState } from 'react'
import Layout from '../../layout'
import blog from "../../Images/BlogDisc.png";
import './blog-description.css'
export default function Index() {
  const [youtubeBtn, setBtn] = useState(false)
  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          <hr
            style={{
              color: "#DEDEDE",
              backgroundColor: "#DEDEDE",
              height: 0.5,
              borderColor: "#DEDEDE",
            }}
          />
          <h2 className="mb-5">Blogs Feed</h2>
          <div className='col-md-8 mt-5 justify-content-center'>
            <button style={{display:youtubeBtn? '':'none'}} className='btn btn-youtube'><i class="fa fa-youtube"></i></button>
            <img style={{opacity:youtubeBtn? '0.5':'1', backgroundColor:'black'}} onMouseEnter={() => setBtn(true)} onMouseLeave = {()=> setBtn(false)} src={blog} alt='Bigco Inc. logo' className='blog-description-img' />
          </div>
          <div className='col-md-10 m-3 blog-text'>
            <h2>How meal effect your
              work efficency.</h2>

            <p className='my-5'>It gives you energy and improves your performance.
              When you eat right, your body processes the nutrients in food
              properly and maximizes them for optimal energy for your needs.
              You can work to the best of your abilities.
              It helps you live a well-balanced life.
              It gives you energy and improves your performance.
              When you eat right, your body processes the nutrients in food
              properly and maximizes them for optimal energy for your needs.
              You can work to the best of your abilities.
              It helps you live a well-balanced life.</p>
          </div>

        </div>

      </div>

    </Layout>
  )
}
