import React from 'react'
import './user.css'
import Layout from '../../layout'
import userImg from '../../Images/userImg.png'
import DeleteModal from '../../Images/Vector4.png'
import BookedRest from '../../components/BookedRest'
const Index = () => {
  return (
    <Layout>
        <div className='row'>
            <div className='col-md-12'>
            <hr
              style={{
                color: "#DEDEDE",
                backgroundColor: "#DEDEDE",
                height: 0.5,
                borderColor: "#DEDEDE",
              }}
            />
            </div>
            <div className='col-md-10 my-4 mx-3 profile-booked-cont'>
            <img src={userImg} className="profile-img" alt="Profile Image" />
            <div className='info-cont'> 
             <h2 className='Profile-name'> User </h2>
             <p className='point-text'>Points: 49</p>
             <p>rajabali810@gmail.com</p>
              <p>14th streat ,f-8, islamabad</p>
            </div>
            <div className='block-button-cont'>
              <button className='btn btn-danger' data-toggle="modal" data-target="#basicModal">Ban User</button>
            </div>
            </div>

{/* <!-- basic modal --> */}
<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content rounded-4">
      <div class="modal-body">
        <img className='delete-modal-img' src={DeleteModal} />
        <p>Are you sure about deleting this User?
                  This action is irreversible.</p>
                  <button type="button" class="btn bg-light">Delete User</button>
      </div>
        
    </div>
  </div>
</div>


              <div className='col-md-12 my-5'>
                <h2 className='m-3'>Restaurants Booked: </h2>
                <div className='restaurant-reserved-cont'>
                    <BookedRest />
                    <BookedRest />
                    <BookedRest />
                    <BookedRest />
                    <BookedRest />
                    <BookedRest />
                    <BookedRest />
                    <BookedRest />

                </div>
              </div>
        </div>
    </Layout>
  )
}

export default Index