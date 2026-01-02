import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const {
    name = "Restaurant",
    cuisines = [],
    price = "-",
    avgRating = "-",
    deliveryTime = "-",
    image,          // ✅ FIX (imageUrl ❌)
    menu = {},
  } = resInfo;

  const categories = Object.entries(menu);

  return (
    <div className="pt-32 px-4 md:px-12 max-w-4xl mx-auto">
      
      {/* Restaurant Info */}
      <div className="flex gap-6 items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-40 h-28 object-cover rounded-lg"
        />

        <div>
          <h1 className="font-bold text-3xl mb-1">{name}</h1>
          <p className="text-gray-700 font-semibold">
            {cuisines.join(", ")} | {price} | ⭐ {avgRating} | ⏱ {deliveryTime} mins
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      {categories.length > 0 ? (
        categories.map(([categoryName, items], index) => (
          <RestaurantCategory
            key={categoryName}
            title={categoryName}
            items={items}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))
      ) : (
        <p className="text-gray-500 mt-4">Menu not available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
