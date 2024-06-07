import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import React, { useEffect } from "react";
import { useState } from "react";
import { async } from "regenerator-runtime";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurant]=useState([]);
    useEffect(()=>{
       fetchData();
    },[])
    const fetchData=async()=>{
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076008&lng=72.8776707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
    }
    //conditional Rendering
    return listOfRestaurants.length===0?<Shimmer/>:
   (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(data=>data.info.avgRating>4.4)
                    console.log(listOfRestaurants)
                    // console.log("setListOfRestaurant-->",setListOfRestaurant)
                    setListOfRestaurant(filteredList);
                }
            }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(value=><RestaurantCard key={value.info.id} respData={value} />)
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