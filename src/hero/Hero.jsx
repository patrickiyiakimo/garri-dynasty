import garri from "../images/yellow-garri-white-on-background-260nw-2174347367.jpg";
import { FaSearch } from "react-icons/fa";
import React from "react";
import AboutUs from "./AboutUs";

const Hero = () => {
 

  return (
    <div className="hero">
      <FaSearch className="icon" />
      <input type="text" placeholder="search favourite garri here" />
      <img src={garri} alt="garri-pics" />
      <h1>
        The Garri Dynasty, <br />
        Saving Nigerians since 1900
      </h1>
      <p>The hunger destroyer</p>
      <p>
        For over a century, Garri has been more than just a staple<br/> food in
        Nigeria – it has been a lifeline, nourishing generations and sustaining<br/>
        communities <br/>through times of plenty and scarcity alike. Since its
        introduction in 1900, <br/>Garri has played a pivotal role in the Nigerian
        diet, <br/>offering a reliable source of energy and nutrition to millions.
      </p>
      <button>GET STARTED</button>
      <AboutUs />
    </div>
  );
};

export default Hero;
