import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

//lifting state up ------study
//prop drilling

const RestaurantMenu=()=>{
    // const [resInfo, setResInfo]=useState(null);
    const params=useParams();
    console.log(params);
    const { resId } = useParams();  
    const resInfo=useRestaurantMenu(resId);
    console.log(resInfo);

    const [showIndex , setShowIndex]=useState(null)
    

    // useEffect(()=>{
    //     fetchMenu();
    // },[])
    
    // const fetchMenu=async ()=>{
    //     const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
    //     const json=await data.json();
    //     console.log(json);
    //      setResInfo(json.data);
    // }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info ||{};
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||{};
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||{} );
    console.log("hello",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    console.log(itemCards);

    const categoris=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("cat",categoris);
    

    return (resInfo==null)?<Shimmer />:
    (
        <div className="text-center ">
            <h1 className="font-bold m-4 text-4xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <ul>
                {itemCards.map((item)=>{
                    return (
                        <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price || item.card.info.defaultPrice}</li>
                    )

                })}
                <li>{itemCards[0].card.info.name}</li>
            </ul> */}
            {
            categoris.map((category, index)=>{
               return  <RestaurantCategory data={category?.card?.card} showItems={showIndex==index?true:false} setShowIndex={()=>setShowIndex(index)}/>

            })
            }

          
        </div>
    )
}
export default RestaurantMenu;