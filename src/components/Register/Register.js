import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h2>Please Complete Your Registration!</h2>
      <form>
        <input type="text" name="" placeholder="Your name" id="" />
        <br />
        <input type="email" name="" placeholder="Your email" id="" />
        <br />
        <input type="password" name="" placeholder="Your password" id="" />
        <br />
        <input type="submit" value="Register Now!" />
      </form>
    </div>
  );
};

export default Register;
