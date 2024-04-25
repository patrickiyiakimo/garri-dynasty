import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <span>
            <button>Garri Dynasty</button>
          </span>
        </li>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <FaShoppingCart color="" />
        </li>
        <li>
          <FaHeart color="" />
        </li>
        <li>
          <section>
            <button>Log In</button>
          </section>
        </li>
        <li>
          <button>Sign Up</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
