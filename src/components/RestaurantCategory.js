import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCategory = ({ title, items = [], showItems, setShowIndex }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="my-4 border rounded-lg shadow-md bg-white">
      
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={setShowIndex}
      >
        <h2 className="font-semibold text-lg">
          {title} ({items.length})
        </h2>
        <span>{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Content */}
      {showItems && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 shadow-sm"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                )}

                <h3 className="font-bold truncate">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: {item.price}</p>
                <p className="text-sm text-gray-600">
                  Rating: ⭐ {item.avgRating ?? "N/A"}
                </p>

                {item.offer && (
                  <p className="text-sm text-green-600">
                    Offer: {item.offer}
                  </p>
                )}

                <p className="text-xs text-gray-500 mt-1">
                  User: {loggedInUser}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items available</p>
          )}

        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
