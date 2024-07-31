import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import React, { useEffect } from "react";
import { useState } from "react";
import { async } from "regenerator-runtime";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurant]=useState([]);
    const [filterRestaurants,setFilterRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    
    console.log("body rendered")
    useEffect(()=>{
       fetchData();
    },[])
    const fetchData=async()=>{
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076008&lng=72.8776707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);
        setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
    }
    //conditional Rendering
    return listOfRestaurants.length===0?<Shimmer/>:
   (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>
                    setSearchText(e.target.value)
                    }/>
                    <button onClick={()=>{
                       
                         const filteredSearch=listOfRestaurants.filter(data=>data.info.name.toLowerCase().includes(searchText.toLowerCase())).length>0?listOfRestaurants.filter(data=>data.info.name.toLowerCase().includes(searchText.toLowerCase())):listOfRestaurants;
                       
                         setFilterRestaurants(filteredSearch);
                        
                        //Fitler the restaurant cards & update the UI
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(data=>data.info.avgRating>4.4)
                    console.log(listOfRestaurants)
                    setListOfRestaurant(filteredList);
                }
            }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                 filterRestaurants.map(value=><Link to={`restaurants/${value.info.id}`}>
                     <RestaurantCard key={value.info.id} respData={value} />  </Link> )
                }
                {/* <RestaurantCard respData={resObj[0]} />
                <RestaurantCard respData={resObj[1]} />
                <RestaurantCard respData={resObj[2]} />
                <RestaurantCard respData={resObj[3]} />
                <RestaurantCard respData={resObj[4]} /> */}
               
            </div>
        </div>
    )
}
export default Body;