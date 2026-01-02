import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCategory = ({ title, items, showItems, setShowIndex }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="my-4 border rounded-lg shadow-md bg-white">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={setShowIndex}
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <span>{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Content */}
      {showItems && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 shadow-sm min-h-[150px]"
            >
              <h3 className="font-bold truncate">{item.name}</h3>
              <p className="text-sm text-gray-600">Price: {item.price}</p>
              <p className="text-sm text-gray-600">Offer: {item.offer}</p>
              <p className="text-sm text-gray-600">Rating: {item.avgRating}</p>
              <p className="text-sm text-gray-600">Delivery: {item.deliveryTime}</p>
              <p className="text-xs text-gray-500 mt-1">User: {loggedInUser}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
