import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // fetch restaurant data
  const [showIndex, setShowIndex] = useState(null);

  // Show shimmer while data is loading
  if (!resInfo) return <Shimmer />;

  // Destructure with default values
  const {
    name = "Restaurant",
    cuisines = [],
    price = "-",
    avgRating = "-",
    deliveryTime = "-",
    menu = {},
  } = resInfo;

  // Convert menu object into array of [sectionName, items]
  const categories = Object.entries(menu);

  return (
    <div className="text-center pt-32 px-4 md:px-12">
      {/* Restaurant Info */}
      <h1 className="font-bold my-4 text-3xl">{name}</h1>
      <p className="font-semibold text-lg text-gray-700">
        {cuisines.length > 0 ? cuisines.join(", ") : "N/A"} | ₹{price} | ⭐ {avgRating} | ⏱ {deliveryTime} mins
      </p>

      {/* Categories Accordion */}
      {categories.length > 0 ? (
        categories.map(([categoryName, items], index) => (
          <RestaurantCategory
            key={categoryName}
            title={categoryName}
            items={items || []} // ensure items is always an array
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))
      ) : (
        <p className="text-gray-500 mt-4">Menu not available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
