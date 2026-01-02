import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 fixed top-0 left-0 right-0 z-50 p-4">
      {/* Logo */}
      <div className="logo-container">
        <img className="w-40 sm:w-48 md:w-56" src={LOGO_URL} alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <span>Online Status: {onlineStatus ? "✅" : "🔴"}</span>
        <Link className="hover:text-green-700" to="/">Home</Link>
        <Link className="hover:text-green-700" to="/about">About Us</Link>
        <Link className="hover:text-green-700" to="/contact">Contact Us</Link>
        <Link className="hover:text-green-700" to="/grocery">Grocery</Link>
        <Link className="font-bold text-xl hover:text-green-700" to="/cart">
          Cart - ({cartItems.length} items)
        </Link>

        <button
          className="bg-blue-400 text-white px-3 py-1 rounded-lg"
          onClick={() =>
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login")
          }
        >
          {btnNameReact}
        </button>

        <span className="ml-2">{loggedInUser}</span>
      </nav>
    </div>
  );
};

export default Header;
