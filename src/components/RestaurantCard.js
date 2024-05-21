import { CLOUD_URL } from "../../utils/constants";
const RestaurantCard=(props)=>{
   const {respData}=props;
//    console.log(respData)
   const {name,cuisines,avgRatingString,costForTwo,cloudinaryImageId}=respData?.info
    // const respData=props;
    return (
        <div className="res-card">
        
            <img className="res-logo" 
            alt="res-logo"
            src={CLOUD_URL+ cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRatingString+ " ⭐Ratings"}</h4>
            <h4>{costForTwo }</h4>
        </div>
    )
}
export default RestaurantCard;