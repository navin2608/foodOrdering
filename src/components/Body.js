import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import React, { useEffect } from "react";
import { useState } from "react";
import { async } from "regenerator-runtime";
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurant]=useState(resObj);
    useEffect(()=>{
       fetchData();
    },[])
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(data=>data.info.avgRating>4.3)
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