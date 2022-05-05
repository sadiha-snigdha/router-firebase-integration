import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Knock Knock!! Who's there?</h2>
      <h2>{user ? user.displayName : "Nobody is here!"}</h2>
    </div>
  );
};

export default Products;
