import React from 'react'
import Restinfoimg from "../../Images/Restinfoimg.png";
import Rating from "react-rating";
import DeleteModal from '../../Images/Vector4.png'
const Index = () => {
  return (
    <>
    <div className="row">
          <div className="col-md-10 ">
            <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
            <div className=" ml-4 head-cont">
              <h2 className="black-color font-weight-bold text-left">
                Kanoli Foods
              </h2>
              <a className="btn btn-danger" data-toggle="modal" data-target="#basicModal" >
                <i className="fa fa-trash-o fa-lg" ></i>
              </a>
            </div>
            <div className="">
              <div className="about-avatar">
                <img
                  src={Restinfoimg}
                  alt="logo"
                  className="resturent-info-pic"
                />
                <div className=" about-list">
                <div className="likes-cont">
                  <div className="rating">
                    <i className="fa fa-heart fa-2x red-color" aria-hidden="true"></i>
                    <p>273 Likes</p>
                  </div>
                </div>
                <div className='likes-cont'>
                <div className='rating'>
                    <h3 className='discount'>35%</h3>
                    <p>Discount</p>
                  </div>
                </div>
                <div className="rating-cont">
                  <div className="rating ">
                    <Rating
                      style={{ color: "#FFBF00" }}
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                    />
                    <p>Rating 4.5</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- basic modal --> */}
        <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content rounded-4">
      <div class="modal-body">
        <img className='delete-modal-img' src={DeleteModal} />
        <p>Are you sure about deleting this Restaurant?
                  This action is irreversible.</p>
                  <button type="button" class="btn bg-light">Delete Restaurant</button>
      </div>
        
    </div>
  </div>
</div>

        </>

  )
}

export default Index