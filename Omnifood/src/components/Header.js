import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <nav>
        <Navigation />
      </nav>
      <div className="hero-text-box">
        <h1>
          Goodbye junk food. <br />
          Hello super healthy meals.
        </h1>
        <Link className="btn btn-full" to="#">
          I&apos;m hungry
        </Link>
        <Link className="btn btn-ghost" to="#">
          Show me more
        </Link>
      </div>
    </header>
  );
};

export default Header;
