import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="relative m-4 p-4 w-full sm:w-[250px] bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-200">
      {/* Restaurant Image */}
      <img
        className="w-full h-40 object-cover rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Name and Cuisines */}
      <h3 className="font-bold py-2 text-lg">{name || "Restaurant"}</h3>
      <p className="text-sm text-gray-600">
        {Array.isArray(cuisines) ? cuisines.join(", ") : "Various Cuisines"}
      </p>

      {/* Details */}
      <div className="flex justify-between mt-2 text-sm">
        <span>⭐ {avgRating || "N/A"}</span>
        <span>₹{costForTwo ? costForTwo / 100 : "N/A"} FOR TWO</span>
      </div>
      <div className="mt-1 text-sm">⏱ {deliveryTime || "N/A"} mins</div>

      {/* Logged-in User */}
      <div className="mt-2 text-xs text-gray-500">User: {loggedInUser || "Guest"}</div>
    </div>
  );
};

// Higher Order Component for Promoted Label
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white p-1 px-2 rounded-md text-xs z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
