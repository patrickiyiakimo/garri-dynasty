import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <li>Subscribe</li>
        <li>
          <Link to="cartlist" className="cart">
            <FaShoppingCart color="" />
          </Link>
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
