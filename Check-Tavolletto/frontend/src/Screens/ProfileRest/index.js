import React from "react";
import "./profileRest.css";
import Layout from '../../layout'
import ImageCard from '../../components/ImgCard'
import RestInfo from '../../components/RestInfo'
import Status from '../../components/statusStory'
import { useNavigate } from "react-router-dom";
export default function Index() {
  const history = useNavigate()
  return (
    <Layout>
      <RestInfo />
        <div className="row">
          <div className="col-md-10 d-flex flex-column">
          <div className="Description ml-5 mt-5">
            <h4>Description:</h4>
            <p>Are you sad? Order now a HAPPY meal :)</p>
          </div>
          <div className="Description ml-5 mt-2">
            <h4>Address:</h4>
            <p>14th street, F-8,islamabad, pakistan</p>
          </div>
          </div>
          <div className="col-md-10">
          <div className="row ml-4 mt-3">  
        
        {/* <div className="add-story">
          <div className="add-status circle ">
  <img className="add-status-profile" src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200" alt="" /> 
          <i className="add-btn fa fa-plus"></i>
          </div></div> */}

        <div className="status">
          <Status />
          <Status />
          <Status/>
          <Status />
          <Status />
          <Status/>
          <Status />
          <Status />
          <Status/>
        </div>
        </div>
      </div>
          <div className="col-md-10 btn-cont">
          <button onClick={()=> history('/restaurant-recentActivity')} type="button" class="btn btn-resturant-profile btn-danger">Recent Activity</button>
          <button onClick={()=> history('/restaurant-review')} type="button" class="btn m-5 btn-resturant-profile btn-warning">Check Reviews</button>
          <a onClick={()=> history('/restaurant-menuDiscription')} class="btn btn-danger btn-resturant-menu">
                <i class="fa fa-calendar-o fa-2x " aria-hidden="true"></i>
              </a>
          </div>
          <div className="col-md-10 mb-5">
          <button onClick={()=> history('/restaurant-info')} type="button" class="btn info-btn-resturant-profile btn-warning">Resturant Information</button>
          </div>
        </div>

      
      <div className="col-md-10 rest-img-cont mt-5">
            <ImageCard />
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
          
      </div>  
    </Layout>
  );
}
