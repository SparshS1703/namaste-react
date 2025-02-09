import CDN_URL from "../utils/constants";
const stylecard={
    backgroundColor:"#f0f0f0",
}
const RestaurantCard=({resData})=>{
   
    const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,}=resData?.info || {};
    const{deliveryTime}=resData.info.sla || {};
    return (
        <div className="res-card m-4 p-8 w-[17vw] overflow-hidden rounded-2xl border-transparent bg-gray-100 hover:border hover:border-black hover:bg-gray-200 transition-all" >
            <img className="img rounded-2xl" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-5 text-xl">{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}

// higher order component

//input->Restaurant Card => Restaurant Card Promoted

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded-2xl m-2 p-3">Bestseller</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
//pure function-doesnt change code of rescard just enhances it

export default RestaurantCard;