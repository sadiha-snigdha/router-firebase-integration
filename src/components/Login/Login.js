import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useFirebase();

  return (
    <div>
      <h2>Login to your account!</h2>

      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>

      <form>
        <input type="email" name="" placeholder="Your email" id="" />
        <br />
        <input type="password" name="" placeholder="Your password" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
