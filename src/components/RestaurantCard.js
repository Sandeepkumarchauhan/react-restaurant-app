import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    avgRating,
    cuisines,
    price,
    deliveryTime,
    image,
  } = resData;

  return (
    <div className="relative m-3 w-full sm:w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          alt={name}
          src={image}
        />

        {/* Rating Badge */}
        <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
          ⭐ {avgRating || "N/A"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{name || "Restaurant"}</h3>

        <p className="text-sm text-gray-600 truncate">
          {Array.isArray(cuisines) ? cuisines.join(", ") : "Various Cuisines"}
        </p>

        <div className="flex justify-between items-center mt-3 text-sm text-gray-700">
          <span className="font-semibold">{price} for two</span>
          <span>⏱ {deliveryTime || "N/A"} mins</span>
        </div>

        <div className="mt-2 text-xs text-gray-400">
          User: {loggedInUser || "Guest"}
        </div>
      </div>
    </div>
  );
};

// 🔥 HOC for Promoted Label
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <span className="absolute top-2 left-2 z-10 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
        Promoted
      </span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
