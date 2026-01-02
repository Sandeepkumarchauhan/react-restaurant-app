import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import restaurants from "../utils/Api";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    setListOfRestraunt(restaurants);
    setFilteredRestaurant(restaurants);
  }, []);

  if (!onlineStatus) {
    return (
      <h1 className="pt-32 text-center text-xl font-semibold">
        Looks like you're offline 😕
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    /* 🔑 FIX: header fixed hai isliye top padding */
    <div className="pt-28 px-4 max-w-7xl mx-auto">

      {/* 🔍 Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">

        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-400 px-3 py-2 rounded-md"
            placeholder="Search restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Username */}
        <div className="flex items-center gap-2">
          <label className="font-medium">User:</label>
          <input
            className="border border-gray-400 px-2 py-1 rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* 🍽 Restaurant Cards */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="m-2"
          >
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
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
