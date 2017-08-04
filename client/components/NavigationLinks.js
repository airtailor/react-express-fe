import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import { signOutCurrentUser } from '../actions';
import SearchBar from './SearchBar';
import homeImage from '../images/home.png';
import ordersImage from '../images/orders.png';
import logoutImage from '../images/logout.png';


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
      <div>
        <SearchBar />
        <ul className="navbar-links-ul">
          <NavigationLink cssClass="home-link" route="/" text="Home" image={homeImage} />
          <NavigationLink cssClass="orders-link" route="/orders" text="Orders" image={ordersImage} />
          <NavigationLink cssClass="new-store-link" route="/stores/new" text="Create New Store" image={homeImage} />
          <li><a className="navbar-links-li sign-out-link" onClick={() => this.handleSignOut() }>
          <NavigationLink cssClass="close-link" route="#" text="Close" image={homeImage} />
            <img src={logoutImage} alt='logout' /> LOGOUT
           </a></li>
        </ul>
      </div>
    );
  }

  tailorNavbar(){
    const {toggleNavState, navState} = this.props;
    return (
      <div>
        <SearchBar />
        <ul className="navbar-links-ul">
          <NavigationLink cssClass="home-link" route="/" text="Home" image={homeImage} />
          <NavigationLink cssClass="orders-link" route="/orders" text="Orders" image={ordersImage} />
          <li><a className="navbar-links-li sign-out-link" onClick={() => this.handleSignOut() }>
            <img src={logoutImage} alt='logout' /> LOGOUT
           </a></li>
           <li><a className="navbar-links-li close-menu-link" onClick={() => toggleNavState(navState) }>
             <img src={logoutImage} alt='logout' /> Close Menu
            </a></li>
        </ul>
      </div>
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
