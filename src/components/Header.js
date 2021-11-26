import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList Movie</Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/">WatchList</NavLink>
            </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
            </li>
            <li>
              <NavLink to="/add" className="btn">
                Add Movie
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
