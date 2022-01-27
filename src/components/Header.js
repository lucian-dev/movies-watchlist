import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative bg-black">
      <div className="container mx-auto border-2 p-5">
        <div className="flex items-center justify-between text-white">
          <div className="brand">
            <Link to="/">WatchList Movie</Link>
          </div>
          <ul className="flex">
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
