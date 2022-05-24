import React from 'react';
import {Routes,Route, useLocation} from 'react-router-dom';
import ManageRest from './ManageRest'
import ProfileRest from './ProfileRest'
import RecentActivity from './RecentActivity'
import RestInformation from './RestInformation'
import RestReview from './RestReview'
import SalesAnalytics from './salesAnalytics'
import UserAnalytics from './userAnalytics'
import Home from './home'
import Login from './login';
import Notify from './notify'
import SignupNotifications from './RestSignup'
import Users from './customerData'
import TotalSale from './TotalSales'
import Profile from './Profile'
import UpdateProfile from './profile-update'
import UpdatedPrivacy from './Update-privacy'
import UpdateFAQ from './updateFAQ'
import Impression from './Impression'
import UserDetail from './User-detail'
import MenuPage from './RestMenu'
import MenuDescription from './MenuDiscription'
import Blogs from './Blogs'
import BlogDiscription from './BlogDiscription'
import BlogPost from './BlogPost'
import BillPayment from './BillPayment'
import UserReserved from './UserReserved'
import Report from './Report'
import EditTable from './EditTable'
import ReservationChange from './reservationChanges'
import RestaurantAnalytics from './RestaurantAnalytics'
import Membership from './Membership'
import EditMembership from './EditMember'
import BookedPackage from './BookedPackage'
import AdPackage from './AdPackage'
const Index = () => {
  const location = useLocation()
  return (

          <Routes location={location} key={location.pathname}>
            <Route path='/' element={ <Login /> } />
            <Route path='/Dashboard' element={<Home />} />
            <Route path='/manage-restaurants' element = {<ManageRest />} />
            <Route path = '/restaurant-profile' element = {<ProfileRest />} />
            <Route path = '/restaurant-recentActivity' element = {<RecentActivity />} />
            <Route path='/menu-page' element = {<MenuPage />} />
            <Route path='/restaurant-menuDiscription' element = {<MenuDescription />} />
            <Route path='/restaurant-info' element ={<RestInformation />} /> 
            <Route path='/restaurant-review' element ={<RestReview />} /> 
            <Route path='/notifications' element ={<Notify />} /> 
            <Route path='/sales-analytics' element = {<SalesAnalytics />} />
            <Route path='/user-analytics' element = {<UserAnalytics />} />
            <Route path = '/restaurant-analytics' element = {<RestaurantAnalytics />} />
            <Route path = '/All-Users' element ={ <Users /> } />
            <Route path='/signup-requests' element = { <SignupNotifications /> } />
            <Route path='/totalSales' element ={ <TotalSale /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/update-profile' element ={<UpdateProfile />} />
            <Route path='/update-faq' element = { <UpdateFAQ /> } />
            <Route path='/update-privacy' element = {<UpdatedPrivacy /> } />
            <Route path='/impression-section' element = {<Impression />} />
            <Route path = '/user-detail-page' element = {<UserDetail />} />
            <Route path = '/blogs' element = {<Blogs />} />
            <Route path = '/blogs-Discription' element = {<BlogDiscription />} />
            <Route path = '/blogs-Post' element = {<BlogPost />} />
            <Route path = '/billpayment' element = {<BillPayment />} />
            <Route path='/reserved-table-users' element = {<UserReserved />} />
            <Route path = '/reports' element ={<Report />} />
            <Route path='/edit-table-offer' element = {<EditTable />} />
            <Route path='/reservation-changes' element = {<ReservationChange />} />
            <Route path='/membership' element = {<Membership />} />
            <Route path='/edit-membership' element = {<EditMembership />}  /> 
            <Route path='/booked-packages' element = {<BookedPackage />}  /> 
            <Route path='/ad-packages-detail' element = {<AdPackage />} />
          </Routes>
  )
}

export default Index