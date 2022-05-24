
import Layout from '../../layout'
import React, { useState } from 'react';

import {MDBTable, MDBTableHead,MDBTableBody, MDBDataTable } from 'mdbreact';
import {data_people} from './data.js'
import './customer.css'
const TablePage = () => {
    const [toggle,setToggle] = useState(false)

    return (
        <Layout>
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
            <div className='col-md-12 heading-container'>
              <h3>All Customers </h3>
              <div class={toggle?"dropdown show":"dropdown"}>
  <button onClick={()=> {
      console.log('before click ....',toggle);
      setToggle((prevState)=> (!prevState))
      console.log('after click.......',toggle);
      }} class="btn btn-warning dropdown-toggle" type="button" >
    Sort by
  </button>
  <ul class={toggle?"dropdown-menu dropdown-menu-left show":"dropdown-menu dropdown-menu-left"}>
    <li><a href="#">Recent</a></li>
    <li><a href="#">Most Recent</a></li>

  </ul>
</div>
            </div>  
            {/* <MDBTable 
            paginationLabel={['previews', 'next']} paging entries = {5} maxHeight="400px" entriesOptions = {[5,10]}>
                <MDBTableHead columns={data_people.columns} />
                <MDBTableBody rows={data_people.rows} />
            </MDBTable> */}
            
            <MDBDataTable responsive noBottomColumns={true}  entriesOptions={[5, 10, 20]} entries={5} pagesAmount={4} data={data_people} searchTop searchBottom={false} />
        </Layout>
    );
};

export default TablePage;