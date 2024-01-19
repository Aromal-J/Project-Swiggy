import React from "react";

function FilterContainer({ restaurantData, setRestaurantData }) {
  return (
    <div className="filter-container">
      <button
        className="filter-button"
        onClick={() => {
          const filteredRatingData = restaurantData.filter(
            (e) => e.info.avgRating > 4.0
          );
          setRestaurantData(filteredRatingData);
        }}
      >
        Ratings 4.0+
      </button>
      <button className="filter-button" onClick={()=>{
        const filteredRate300to600Data=restaurantData.filter((e)=>{
            if(e.info.constForTwo){
                
            }
        })
      }}>Rs. 300-Rs. 600</button>
      <button className="filter-button">Less than Rs. 300</button>
    </div>
  );
}

export default FilterContainer;
