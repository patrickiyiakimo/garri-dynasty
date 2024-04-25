import garri from "../images/yellow-Garri.jpg";
import smallgarri from "../images/Abebi garri.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <input type="text" placeholder="search favourite garri here" />
      <img src={garri} alt="garri-pics" />
      <span>
        <img src={smallgarri} alt="smallgarri" />
      </span>
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
