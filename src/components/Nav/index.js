import React from 'react';

function Nav() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="football">🏈</span> Premier Fantasy Football
                </a>
            </h2>
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
    );
}

export default Nav