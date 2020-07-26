import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Link } from "react-router-dom";

const SignedInLinks = (props) => {
  console.log("### props.initials: ", props.initials);
  const displayInitial = props.initials === undefined ? "" : props.initials;
  return (
    <ul className="right">
      <li>
        <NavLink
          className="nav-new-project blue-grey-text text-darken-4"
          to="/create"
        >
          New Project
        </NavLink>
        <Link
          className="theme-back-blue fab-new-project btn-floating btn-large"
          to="/create"
        >
          <i className="material-icons">add</i>
        </Link>
      </li>
      <li>
        <a className="blue-grey-text text-darken-4" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn theme-back-blue btn-floating">
          {/* {props.profile.initials} */}
          {displayInitial}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
