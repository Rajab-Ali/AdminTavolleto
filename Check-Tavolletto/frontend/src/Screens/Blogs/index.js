import React from 'react'
import Layout from '../../layout'
import BlogCard from '../../components/BlogCard'
import './Blogs.css'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const history = useNavigate()
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
          <div className='d-flex col-md-10 justify-content-between align-items-center'>
          <h2 className="mb-5">Blogs Feed</h2>
          <button onClick={()=> history('/blogs-Post')} type = 'button' className='btn btn-warning p-3 mr-1'>Post Blog</button>
          </div>          
          <BlogCard />
          <BlogCard />
          <BlogCard />
          
        </div>

      </div>
  
  </Layout>
  )
}
