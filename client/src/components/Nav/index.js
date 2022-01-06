<<<<<<< HEAD
import React from 'react';

function Nav() {
    return (
        <body>
            <header>
                <h1>
                    <a href="/" className="premiere">
                        <span role="img" aria-label="football">🏈</span> Premiere Fantasy Football
                    </a>
                </h1>
                <nav>
                    <ul className="navigation">
                        <li className="mx-2">
                            <a href="#About">About</a>
                        </li>
                        <li className="mx-2">
                            <a href="#Join">Join</a>
                        </li>
                        <li className="mx-2">
                            <a href="#Schedule">Schedule</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </body>
    );
}

export default Nav
=======
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        
                    </li>
                    <li className="mx-1">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                  <li className="mx-1">
                    <Link to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="mx-1">
                    <Link to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              );
        }
    }

    return (
        <header className="flex-row px-1">
            <h1>
                
            </h1>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;
>>>>>>> mitchell
