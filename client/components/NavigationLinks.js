import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = (props) => {
  if (props.currentUser) {
    return (
      <ul className="navbar-links-ul">
        <li><Link className="navbar-links-li sign-out-link" to="#">Sign Out</Link></li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-links-ul">
        <li><Link className="navbar-links-li sign-in-link" to="/sign_in">Sign In</Link></li>
        <li><Link className="navbar-links-li sign-up-link" to="/sign_up">Sign Up</Link></li>
      </ul>
    );
  }
}

export default NavigationLinks;
