import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

import { useState, useEffect } from "react";

export default function App() {
  const [resObj, setresobj] = useState([]);
  const [filteredrest,setfilteredrest] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setresobj(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredrest(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants );

  };

  
  

  const handleSearch = () => {
    const filteredRestaurants = resObj.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredrest(filteredRestaurants);
  };

  const handleFilter = () => {
    const filteredRestaurants = resObj.filter((restaurant) => restaurant.info.avgRating > 4);
    setfilteredrest(filteredRestaurants);
  };

  const renderFilterSection =()=>(
   <div className="filter-direction">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            placeholder="Type here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-button" onClick={handleFilter}>
          Filter 4+ Rating
        </button>
      </div>
    );
  
  

  const restaurantComponents = filteredrest.map((restaurant) => (
    <Body key={restaurant.info.id} resdataprop={restaurant} />
  ));

  console.log("resObj", resObj);
  return (
    <>
    
    <Navbar />
    {renderFilterSection()}  
    <div  class="body-direction"> {restaurantComponents}</div>
    </>
  )
}