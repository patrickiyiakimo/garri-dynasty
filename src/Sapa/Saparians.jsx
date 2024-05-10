import Footer from "./Footer";

const Saparians = () => {
  return (
    <div className="sapa">
      <h3>Food for saparians!!!</h3>
      <input type="text" placeholder="subscribe to our latest garri" />
          <button onClick={() => alert('Thanks for Subscribing')}>Subscribe</button>
          <Footer />
    </div>
  );
};

export default Saparians;
