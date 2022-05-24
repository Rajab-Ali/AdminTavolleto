import React from 'react'
import { useNavigate } from 'react-router-dom'
import resturant from '../../Images/resturant.png'

const Index = () => {
  const history = useNavigate()
  return (
            <div className="bg-white p-3 card-mang-style  mt-3">
              <div className="row justify-content-between">
                <div className="col-md-2 img-cont">
                  <div className="justify-content-center align-items-center icon-container mb-2">
                    <img
                      src={resturant}
                      alt="BigCo Inc. logo"
                      className="resturant-img"
                    />
                  </div>
                </div>
                <div className="col-md-5 resturant-body">
                  <div className="listing-title">
                    <h4 className="font-weight-bold">Golden Kitchen</h4>
                  </div>

                  <div className="description">
                    <p>
                      <h5> Are you sad? Order now a happy meal :)</h5>
                    </p>
                    <p>
                      <h6>Adress: Royal Avenue, St#7, Cl</h6>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center col-md-3">
                  <div className="d-flex flex-column justify-content-start user-profile w-100">
                    <button onClick={()=> history('/restaurant-profile')} type="button"  class="btn btn-all">
                      Go to Resturant
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Index