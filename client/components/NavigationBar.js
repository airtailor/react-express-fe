import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationLinks from './NavigationLinks';

const NavigationBar = (props) => {
  // will need access to redux store to determine if there is a curent user
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Air Tailor</Link>
      </div>
      <div className="navbar-links-container">
        <NavigationLinks currentUser={props.currentUser} />
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
