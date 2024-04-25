import garri from "../images/tropical sun garri.jpg"
import smallgarri from "../images/Abebi garri.jpg"


const Hero = () => {
  return (
    <div className="hero">
      <input type="text" placeholder="search favourite garri here" />
          <img src={garri} alt="garri-pics" />
          <span><img src={ smallgarri } alt="smallgarri" /></span>
      <h1>Saving Nigerians since 1929</h1>
      <p>The hunger fighter</p>
      <button>GET STARTED</button>
    </div>
  );
};

export default Hero;
