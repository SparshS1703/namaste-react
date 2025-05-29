import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRes, setLisOfRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setLisOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   Dynamically find the object containing restaurants

    const restaurantCard = json?.data?.cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    // console.log("Fetched Restaurants:", restaurants);
    setLisOfRes(restaurants);
    setFilteredRes(restaurants);
  };
  const RestauratPromotedCard = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>Looks like youre offline!! Please check your internet Connection</h1>
    );

  if (listOfRes == undefined || listOfRes.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-black border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="p-2 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              const filRes = listOfRes.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRes(filRes);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="p-3 bg-gray-300 rounded-lg"
            onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRes(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {(filteredRes || []).map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.4 ? (
              <RestauratPromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
