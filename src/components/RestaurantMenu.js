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
    image,
    menu = {},
  } = resInfo;

  const categories = Object.entries(menu);

  return (
    <div className="pt-24 px-4 md:px-12 max-w-5xl mx-auto">

      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-full md:w-40 h-36 md:h-28 object-cover rounded-lg"
        />

        <div>
          <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>
          <p className="text-sm md:text-base text-gray-700">
            {cuisines.join(", ")} | {price} | ⭐ {avgRating} | ⏱ {deliveryTime} mins
          </p>
        </div>
      </div>

      {categories.map(([title, items], index) => (
        <RestaurantCategory
          key={title}
          title={title}
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
