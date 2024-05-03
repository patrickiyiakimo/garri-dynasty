import React from "react";

const LogIn = () => {
  return (
    <div className="login">
      <h1>Log In</h1>
      <p>Enjoy your 30 days free trial for unlimited garri</p>
      <form>
        <input type="text" name="text" required placeholder="Eamil" />
        <br />
        <input type="text" name="text" required placeholder="Password" />
        <br />
        <span>
          <button>Log In</button>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
