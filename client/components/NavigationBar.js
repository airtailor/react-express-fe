import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationLinks from './NavigationLinks';
import LogoMessage from './LogoMessage';

const NavigationBar = (props) => {
  return (
    <nav className="navbar">
      <LogoMessage className='navbar-logo' text='SHOP PORTAL' />
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
