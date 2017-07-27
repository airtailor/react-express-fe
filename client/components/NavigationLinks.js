import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import { signOutCurrentUser } from '../actions';


class NavigationLinks extends Component {
  handleSignOut(){
    this.props.signOutCurrentUser()
    .then(res => {
      console.log('signed out');
    })
    .catch(err => {
      console.log('oops something went wrong');
    })
  }

  adminNavbar(){
    return (
      <ul className="navbar-links-ul">
        <li><a className="navbar-links-li sign-out-link" onClick={() => this.handleSignOut() }>Sign Out</a></li>
        <NavigationLink cssClass="orders-link" route="/orders" text="Orders" />
        <NavigationLink cssClass="new-store-link" route="/stores/new" text="Create New Store" />
      </ul>
    );
  }

  tailorNavbar(){
    return (
      <ul className="navbar-links-ul">
        <li><a className="navbar-links-li sign-out-link" onClick={() => this.handleSignOut() }>Sign Out</a></li>
        <NavigationLink cssClass="orders-link" route="/orders" text="Orders" />
      </ul>
    );
  }
  
  render() {
    if (this.props.admin) {
      return this.adminNavbar();
    } else if (this.props.loggedIn) {
      return this.tailorNavbar()
    } else {
      return (
        <ul className="navbar-links-ul">
          <NavigationLink cssClass="sign-in-link" route="/sign_in" text="Sign In" />
          <NavigationLink cssClass="sign-up-link" route="/sign_up" text="Sign Up" />
        </ul>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signOutCurrentUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavigationLinks);
