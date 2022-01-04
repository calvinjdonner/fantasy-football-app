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