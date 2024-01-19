import { useState, useEffect } from "react";
import "../Swiggy/style.css";

const RestaurentCards = ({ resData }) => {

  const {cloudinaryImageId, name, avgRating,  cuisines, areaName}=resData?.info
  // const [value, setValue] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/homepage/getCards?lat=9.9312328&lng=76.26730409999999"
  //   );

  //   const json = data.json();
  //   console.log(json);
  // };

  return (
    <div className="container">
      <div className="res-card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="img"
          className="res-img"
        />
        <div className="res-info">
          <h4>{name}</h4>
          <h4>{avgRating}</h4>
          <h4>{resData.info.sla.deliveryTime} mins</h4>
          <p>{cuisines.join(', ')}</p>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCards;
