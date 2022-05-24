import React from "react";
import blog from "../../Images/resturant.png";
import "./BlogCard.css";
import DeleteModal from "../../Images/Vector4.png";
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const history = useNavigate();
  return (
    <>
    <div className='col-md-10'>
      <div className=" card-blog-style  mt-3">
        <div className="row ">
          <div className="col-md-4 img-cont">
            <div className="justify-content-center align-items-center icon-container mb-2">
              <img src={blog} alt="BigCo Inc. logo" className="blog-img" />
            </div>
          </div>
          <div className="col-md-5 mx-3 resturant-body">
            <div className="mt-4 description">
              <p>
                <h5> How meal effect your work efficency.</h5>
              </p>
            </div>
            <div>
              <button  onClick={()=> history('/blogs-Discription')} type="button" className="btn mt-5 btn-blog">
                Go to Blog
              </button>
            </div>
          </div>
          
            <div className="my-3 delete-edit-button-cont">
              <a
                className="btn btn-icon-blog"
                data-toggle="modal"
                data-target="#basicModal"
              >
                <i className="fa fa-trash-o fa-lg "></i>
              </a>
              <a className="btn  btn-icon-blog" >
              <i class="fa fa-light fa-pencil "></i>
              </a>
            </div>

        </div>
      </div>
      </div>

      <div
        className="modal fade"
        id="basicModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-4">
            <div className="modal-body">
              <img className="delete-modal-img" src={DeleteModal} />
              <p>
                Are you sure about deleting this Restaurant? This action is
                irreversible.
              </p>
              <button type="button" class="btn bg-light">
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
