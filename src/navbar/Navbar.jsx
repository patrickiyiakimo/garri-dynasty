import React from "react";
import { FaShoppingCart, FaHeart, FaTimes, } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="bub">Garri Dynasty</button>
      <ul>
        <li className="times"><strong><FaTimes /></strong></li>
        <li className="times"><strong>< GiHamburgerMenu /></strong></li>
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
            <Link to="login" className="login">
              <button>Log In</button>
            </Link>
          </section>
        </li>
        <li>
          <Link to="signup" className="signup">
            <button>Sign Up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
