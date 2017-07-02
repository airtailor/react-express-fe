import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
  // will need access to redux store to determine if there is a curent user
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Air Tailor</Link>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links-ul">
            <li><Link className="navbar-links-li sign-in-link" to="/sign_in">Sign In</Link></li>
            <li><Link className="navbar-links-li sign-up-link" to="/sign_up">Sign Up</Link></li>
            <li><Link className="navbar-links-li sign-out-link" to="#">Sign Out</Link></li>
        </ul>
      </div>
    </nav>
 );
}

export default NavigationBar;
