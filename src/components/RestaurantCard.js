import CDN_URL from "../utils/constants";
const stylecard={
    backgroundColor:"#f0f0f0",
}
const RestaurantCard=({resData})=>{
   
    const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,}=resData?.info || {};
    const{deliveryTime}=resData.info.sla || {};
    return (
        <div className="res-card" style={stylecard}>
            <img className="img" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    );
}

export default RestaurantCard;