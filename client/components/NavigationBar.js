import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationLinks from './NavigationLinks';

const NavigationBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Air Tailor</Link>
      </div>
      <div className="navbar-links-container">
        <NavigationLinks loggedIn={props.loggedIn} admin={props.admin} />
      </div>
    </nav>
  );
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser
  }
}

export default connect(mapStateToProps)(NavigationBar);
