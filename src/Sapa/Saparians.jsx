import React from "react";
import Footer from "./Footer";

const Saparians = () => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const subscribe = () => {
    if (email.trim() === "") {
      return alert("Please enter your email to subscribe");
    } else {
      return alert("Thank you for subscribing");
    }
  };

  return (
    <div className="sapa">
      <h3>Food for saparians!!!</h3>
      <input
        type="text"
        placeholder="subscribe to our latest garri"
        onChange={handleEmailChange}
      />
      <button onClick={subscribe}>Subscribe</button>
      <Footer />
    </div>
  );
};

export default Saparians;
