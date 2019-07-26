import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="row">
      <img
        src="../images/logo-white.png"
        alt="Omnifood logo"
        className="logo"
      />
      <ul className="main-nav">
        <li>
          <Link to="#">Food Delivery</Link>
        </li>
        <li>
          <Link to="#">How it works</Link>
        </li>
        <li>
          <Link to="#">Our cities</Link>
        </li>
        <li>
          <Link to="#">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
