import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfRes,setLisOfRes]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const [searchText, setSearchText]=useState("");
    const [filteredRes, setFilteredRes]=useState("");

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8294422&lng=75.5704521&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setLisOfRes(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setFilteredRes(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    }

    if(listOfRes.length==0)
    {
        return <Shimmer />
    }


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        const filRes=listOfRes.filter((res)=>{
                            
                            return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
                        })
                        
                        setFilteredRes(filRes);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRes.filter(
                        (res)=>res.info.avgRating>4.3
                    );
                    setFilteredRes(filteredList);
                }}>Top rated restaurants</button>
            </div>
            <div className="res-container">
              {
                (filteredRes || []).map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
              }
             
             </div>
        </div>

    );
}
export default Body;