import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API,REST_MENUIMG}  from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu=()=>{
    
     const {resId}=useParams();
    // console.log(resId);
    const resInfo=useRestaurantMenu(resId);    
    // console.log(resInfo);
   if(resInfo===null) return <Shimmer />;
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    //  console.log(name);
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
     console.log("item cards  "+itemCards)
    return resInfo===null?<Shimmer/>:(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
           <ul>
                
                {itemCards.map((data)=>{
                return(<li key={data?.card?.info?.id}>
                    {/* <img src={`${REST_MENUIMG}${data?.card?.info?.imageId}`} /> */}
                {`${data?.card?.info?.name} - Rs. ${data?.card?.info?.price}`}
                </li>)
})}
               
                {/* <li>{itemCards[0].card.info.name}</li> */}
                
            </ul>
        </div>
    )
}
export default RestaurantMenu;