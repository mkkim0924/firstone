import React from 'react';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="header-logo">
          <a href="/"></a>
        </div>
        <ul className="header-nav">
          <li>
            <a href="#locations">Locations</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Sign up / Log in</a>
          </li>
          <li>
            <a href="#" className="btn">
              Become a Tasker
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
