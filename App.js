import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { resData } from "./Data";
import { useState,useEffect } from "react";

export default function App() {
  const [resObj,setresobj] = useState(resData);
  

  useEffect(()=>{
   fetchData();
  },[])


  const fetchData = async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.5131814&lng=75.4509532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     const json= await data.json();
     console.log(json);
     setresobj(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
  }

  function handleClick() {
    let result = resObj.filter((filtered) => filtered.info.avgRating > 4);
    setresobj(result)
}

  const restaurantComponents = resObj.map((restaurant) => (
    <Body key={restaurant.info.id} resdataprop={restaurant} />
  ));

  console.log("resObj", resObj);
  return (
    <>
    
      <Navbar />
      <button onClick={handleClick} >Filter the data</button>
      <div className="body-direction">{restaurantComponents}</div>
    </>
  );
}
