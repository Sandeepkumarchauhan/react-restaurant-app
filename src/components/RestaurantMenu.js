import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // local API
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, price, avgRating, deliveryTime, menu } = resInfo;

  // Convert local menu object into array of [sectionName, items]
  // Example: [["Recommended", [...]], ["Main", [...]], ["Dessert", [...]], ["Drinks", [...]]]
  const categories = menu ? Object.entries(menu) : [];

  return (
    <div className="text-center pt-32 px-4 md:px-12">
      {/* Restaurant Info */}
      <h1 className="font-bold my-4 text-3xl">{name}</h1>
      <p className="font-semibold text-lg text-gray-700">
        {cuisines.join(", ")} | ₹{price} | ⭐ {avgRating} | ⏱ {deliveryTime} mins
      </p>

      {/* Categories Accordion */}
      {categories.map(([categoryName, items], index) => (
        <RestaurantCategory
          key={categoryName}
          title={categoryName}
          items={items}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
