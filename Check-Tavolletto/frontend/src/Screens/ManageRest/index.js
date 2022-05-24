import React from "react";
import resturant from "../../Images/resturant.png";
import RestaurantCard from '../../components/restaurantCard'
import Layout from '../../layout'
import "./manageRest.css";

export default function index() {
  return (
    <Layout>
      <div className="mt-5 mb-5">
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
            <h2 className="mb-5">Manage Resturant</h2>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            
          </div>

        </div>
      </div>
    </Layout>
  );
}
