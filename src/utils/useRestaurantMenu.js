import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo, setResInfo]=useState(null);
    console.log(resId);
    
    useEffect(()=>{
        fetchMenu();
    },[resId])
    console.log("hello");
    
    const fetchMenu=async ()=>{
        console.log("hiii");
        
        const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        
         setResInfo(json.data);
    }
    return resInfo;

}
export default useRestaurantMenu;