import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="navbar">
      <button className="bub">Garri Dynasty</button>
      <div 
        onClick={() => {
          {
            setMenuOpen(!menuOpen);
          }
          console.log(menuOpen);
        }}
      >
        <ul className={menuOpen ? "open" : ""}>
          {/* <li className="custom-icon">
            <strong>
              <FaTimes />
            </strong>
          </li> */}
          <li className="custom-icon">
            <strong>
              <GiHamburgerMenu />
            </strong>
          </li>
          <li>
            <span>
              <button>Garri Dynasty</button>
            </span>
          </li>
          <li>Home</li>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>
            <NavLink to="cartlist" className="cart">
              <FaShoppingCart color="" />
            </NavLink>
          </li>
          <li>
            <FaHeart color="" />
          </li>
          <li>
            <section>
              <NavLink to="login" className="login">
                <button>Log In</button>
              </NavLink>
            </section>
          </li>
          <li>
            <NavLink to="signup" className="signup">
              <button>Sign Up</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
