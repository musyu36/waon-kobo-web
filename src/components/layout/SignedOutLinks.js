import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink className="blue-grey-text text-darken-4" to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink className="blue-grey-text text-darken-4" to="/signin">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
