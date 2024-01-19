import React, { useState } from "react";
import Navigation from "./Navigation";
import RestaurentCards from "./RestaurentCards";
import { mockData2 } from "./mockData2";
import FilterContainer from "./FilterContainer";

function Layout() {
  const [restaurantData, setRestaurantData] = useState(mockData2);

  return (
    <div className="layout-container">
      <header className="layout-header">
        <Navigation />
      </header>
      <main className="layout-body">
        <div className="restaurant-container">
          <div className="restaurants-with-online-food-delivery-heading">
            <h1>Restaurants with online delivery in Kochi</h1>
          </div>

          <div className="restaurant-filter-container">
            <FilterContainer
              restaurantData={restaurantData}
              setRestaurantData={setRestaurantData}
            />
          </div>

          <div className="restaurant-cards-container">
            {restaurantData.map((e) => (
              <RestaurentCards key={e.info.id} resData={e} />
            ))}
          </div>
        </div>
      </main>
      <footer className="layout-footer"></footer>
    </div>
  );
}

export default Layout;
