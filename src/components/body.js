import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
const Body=()=>{

    const [listOfRes,setLisOfRes]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const [searchText, setSearchText]=useState("");
    const [filteredRes, setFilteredRes]=useState([]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setLisOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        // setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //   Dynamically find the object containing restaurants


          const restaurantCard = json?.data?.cards.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        console.log("Fetched Restaurants:", restaurants);
        setLisOfRes(restaurants);
        setFilteredRes(restaurants);


    }

    if(listOfRes==undefined || listOfRes.length==0)
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
                   <Link  key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
                ))
              }
             
             </div>
        </div>

    );
}
export default Body;