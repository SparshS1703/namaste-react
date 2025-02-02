import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import {Link} from "react-router-dom";


const RestaurantMenu=()=>{
    const [resInfo, setResInfo]=useState(null);
    const params=useParams();
    console.log(params);
    const { resId } = useParams();  

    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu=async ()=>{
        const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
         setResInfo(json.data);
    }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info || {};
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {});
    
    console.log(itemCards);

    return (resInfo==null)?<Shimmer />:
    (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item)=>{
                    return (
                        <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price || item.card.info.defaultPrice}</li>
                    )

                })}
                <li>{itemCards[0].card.info.name}</li>
            </ul>
          
        </div>
    )
}
export default RestaurantMenu;