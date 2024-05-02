import React from "react";

const SignUp = () => {
  return (
    <div className="main">
      <div className="signup">
        <h1>Sign up</h1>
        <p>
          let's get started with your 30 days free trial for unlimited garri
        </p>
        <form>
          <input type="text" name="text" required placeholder="Name" />
          <br />
          <input type="text" name="text" required placeholder="Email" />
          <br />
          <input type="number" name="text" required placeholder="Number" />
          <br />
          <input type="password" name="text" required placeholder="Password" />
          <br />
          <button>Sign Up</button>
          <p>
            Already have an account? <a href="/">Log In</a>
          </p>
          <h5>
            By signing up to create an account I accept Garri Dynasty{" "}
            <span>Terms of use and privacy policy.</span>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
