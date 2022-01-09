import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1"></li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/news">News</Link>
          </li>
          <li className="mx-1">
            <Link to="/form">Player Comparison</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/news">News</Link>
          </li>
          <li className="mx-1">
            <Link to="/form">Player Comparison</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 id="page-title">Premiere Fantasy Football</h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
