import React,{useState} from 'react'
import Layout from '../../layout'
import './BlogPost.css'
import upload from '../../Images/BlogPostUpload.png'
export default function Index() {
    const [PostTitle,setPostTitle] = useState('')
    const [PostYTLink,setPostYTLink] = useState('')
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
                </div>
                    <div className='col-md-12 mt-5'>
                        <h2>Post Blog</h2>
                    </div>
                    <div className='col-md-12 upload-img-cont mt-5'>
                        <div className='upload-img-prop' style={{backgroundImage:` linear-gradient(rgba(254, 247, 244, 0.7), rgba(254, 247, 244, 0.5)),url(${upload})`}}>
                            <button className='btn btn-warning btn-upload p-3'>Upload image</button>
                        </div>
                    </div>
                    <div className='col-md-8  mx-auto post-blog-cont'>
                        <form className='form-update-profile'>
                            <div className='form-group update-group'>
                                <input onChange={(e) => setPostTitle(e.target.value)} type='text' className='form-control update-input' placeholder='Write down the Title' value={PostTitle} />
                            </div>
                            <div className='form-group update-group'>
                                <input onChange={(e) => setPostYTLink(e.target.value)} type='text' className='form-control update-input' placeholder='Paste your YouTube video URL here ' value={PostYTLink} />
                            </div>
                            <div className='form-group update-group'>
                <textarea className="form-control privacy-textarea form-control-lg mb-4" rows="5" placeholder="  Write blog description here....."></textarea>
                  </div>   
                            <div className="form-group update-group">
                                <button onClick={(e) => {
                                    e.preventDefault()

                                }} className="form-control btn btn-primary submit update px-3">Post</button>
                            </div>
                        </form>
                    </div>




            </div>

        </Layout>
    )
}
