import React, { useState } from "react";
import "./MenuDiscription.css";
import Layout from "../../layout";
import RestInfo from "../../components/RestInfo";
import resturant from "../../Images/resturant.png";
import LoginImg from '../../Images/login-bg.png' 


export default function Index({ image, heading }) {
  const [modal,setModal] = useState(false)
  return (
    <Layout>
      <RestInfo />
      <div className="row">
        <div className="col-md-10 "></div>
        <div className="Description ml-5 mt-5">
          <h4>Description:</h4>
          <p>Are you sad? Order now a HAPPY meal :)</p>
        </div>
        
      </div>
      <div className="row m-2">
        <div className="col-md-5 bg-white p-2 card-menu-style  m-3"  data-toggle="modal" data-target="#discriptionModal" >
          <div className="row">
            <div className="col-md-3 img-cont">
              <div className="justify-content-center align-items-center icon-container mb-2">
                <img
                  src={resturant}
                  alt="BigCo Inc. logo"
                  className="resturant-img"
                />
              </div>
            </div>
            <div className="col-md-9 mt-3 discription text-left">
              <h4 className="m-5 ">Paratha + Chae </h4>
            </div>
          </div>
        </div>

        <div className="col-md-5 bg-white p-2 card-menu-style  m-3">
          <div className="row">
            <div className="col-md-3 img-cont">
              <div className="justify-content-center align-items-center icon-container mb-2">
                <img
                  src={resturant}
                  alt="BigCo Inc. logo"
                  className="resturant-img"
                />
              </div>
            </div>
            <div className="col-md-9 mt-3 discription text-left">
              
                <h4 className="m-5 ">Paratha + Chae </h4>
              
            </div>
          </div>
        </div>
      </div>

    <div class="modal" id="discriptionModal" tabIndex="-1" role="dialog" aria-labelledby="discriptionModal" aria-hidden="true">
  <div class="modal-dialog-discription">
    <div class="modal-content modal-discription">
      <div class="modal-body modal-discription-body">
        <div className="w-50 discription-img" style={{backgroundImage:`url(${LoginImg})`}}>
          
        </div>
        <div className="w-50 discription-text-cont">
          <div className="modal-heading-cont">
            <h2>Pasta</h2>
            <button className="mx-1 close" data-dismiss= 'modal'><i className="fa fa-times"></i></button>
          </div>
          <h4 className="my-2">Price: $12</h4>
          <p className="my-4">
          After washing basil and tomatoes, blot them dry with clean paper towel.

Using a clean cutting board, cut tomatoes into quarters.

For marinade, place first six ingredients in a blender. Cover and process until well blended.
          </p>
        </div>
      </div>
        
    </div>
  </div>
</div>


    </Layout>
  );
}
