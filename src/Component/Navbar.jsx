import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <NavLink to="/" className="logo"> Agami Technologies</NavLink>
          <ul className='nav-menu'>
            <li className="nav-item">
              <NavLink to="/timesheet" className="nav-link">Timesheet</NavLink>
            </li>
            {/* Example of conditional rendering based on login status */}
            {loggedIn && (
              <li className="nav-item">
                <NavLink to="/timesheet" className="nav-link">Manager Dashboard</NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink to="/ratingform" className="nav-link">Rating Form</NavLink>
            </li>
          </ul>
          <form className="d-flex">
            {!loggedIn && (
              <>
                <Link className="custom-button" to="/login" role="button">Login</Link>
                <Link className="custom-button" to="/signup" role="button">Sign Up</Link>
              </>
            )}
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
