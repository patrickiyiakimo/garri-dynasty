import garri from "../images/yellow-garri-white-on-background-260nw-2174347367.jpg";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <FaSearch className="icon"/>
      <input type="text" placeholder="search favourite garri here" />
      <img src={garri} alt="garri-pics" />
      <h1>Saving Nigerians since 1929</h1>
      <p>The hunger destroyer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, <br/>adipisicing elit. Facilis,
        nobis! Modi dolores eligendi<br/> nisi impedit, et, hic assumenda dolorum,
        minima voluptatem odio amet! Nisi.
      </p>
      <button>GET STARTED</button>
    </div>
  );
};

export default Hero;
