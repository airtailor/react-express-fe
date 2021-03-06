import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import SearchBar from '../SearchBar';
import {
  editStoreImage,
  logoutImage,
  homeImage,
  ordersImage,
  archivedImage,
  tailorsImage,
} from '../../images';

class NavigationLinks extends Component {
  adminNavbar() {
    const { toggleNavState, navState, store } = this.props;
    const editStoreRoute = `/stores/${store.id}/edit`;
    return (
      <div>
        <SearchBar />
        <ul
          className="navbar-links-ul"
          onClick={() => toggleNavState(navState)}
        >
          <NavigationLink
            cssClass="home-link"
            route="/"
            text="Home"
            image={homeImage}
          />

          <NavigationLink
            cssClass="orders-link"
            route="/admin/orders/new"
            text="Orders"
            image={ordersImage}
          />

          <NavigationLink
            cssClass="orders-link"
            route={`/admin/orders/archived`}
            text="Archive"
            image={archivedImage}
          />

          <NavigationLink
            cssClass="edit-store-link"
            route={editStoreRoute}
            text="Edit Store"
            image={editStoreImage}
          />

          <NavigationLink
            cssClass="new-order-link"
            route="/admin/dashboard"
            text="Dashboard"
            image={tailorsImage}
          />

          <li>
            <a
              className="navbar-links-li close-menu-link"
              onClick={() => toggleNavState(navState)}
            >
              <img src={logoutImage} alt="close menu" /> Close Menu
            </a>
          </li>

          <li className="signout-link">
            <a
              className="navbar-links-li"
              onClick={() => this.props.handleSignOut()}
            >
              <img src={logoutImage} alt="logout" /> LOGOUT
            </a>
          </li>
        </ul>
      </div>
    );
  }

  tailorNavbar() {
    const { toggleNavState, navState, store } = this.props;
    const editStoreRoute = `/stores/${store.id}/edit`;
    return (
      <div>
        <SearchBar />
        <ul
          className="navbar-links-ul"
          onClick={() => toggleNavState(navState)}
        >
          <NavigationLink
            cssClass="home-link"
            route="/"
            text="Home"
            image={homeImage}
          />

          <NavigationLink
            cssClass="orders-link"
            route="/orders"
            text="Orders"
            image={ordersImage}
          />

          <NavigationLink
            cssClass="orders-link"
            route={`/stores/${store.id}/orders/archived`}
            text="Archive"
            image={archivedImage}
          />

          <NavigationLink
            cssClass="edit-store-link"
            route={editStoreRoute}
            text="Account"
            image={editStoreImage}
          />

          <li className="signout-link">
            <a
              className="navbar-links-li"
              onClick={() => this.props.handleSignOut()}
            >
              <img src={logoutImage} alt="logout" /> LOGOUT
            </a>
          </li>
        </ul>
        {this.closeMenu(this.props)}
      </div>
    );
  }

  closeMenu(props) {
    const { toggleNavState, navState } = props;
    if (window.innerWidth < 1025) {
      return (
        <div style={{ marginTop: '50%' }}>
          <li>
            <a
              className="navbar-links-li close-menu-link"
              onClick={() => toggleNavState(navState)}
            >
              <p>Close Menu</p>
              <div className="triangle" />
            </a>
          </li>
        </div>
      );
    }
  }

  retailerNavbar() {
    const { currentUser, toggleNavState, navState, store } = this.props;
    const editStoreRoute = `/stores/${store.id}/edit`;

    return (
      <div>
        <SearchBar />
        <ul
          className="navbar-links-ul"
          onClick={() => toggleNavState(navState)}
        >
          <NavigationLink
            cssClass="home-link"
            route="/"
            text="Home"
            image={homeImage}
          />

          <NavigationLink
            cssClass="orders-link"
            route="/orders"
            text="Orders"
            image={ordersImage}
          />

          <NavigationLink
            cssClass="orders-link"
            route={`/stores/${store.id}/orders/archived`}
            text="Archive"
            image={archivedImage}
          />

          <NavigationLink
            cssClass="edit-store-link"
            route={editStoreRoute}
            text="Account"
            image={editStoreImage}
          />

          <li className="signout-link">
            <a
              className="navbar-links-li"
              onClick={() => this.props.handleSignOut()}
            >
              <img src={logoutImage} alt="logout" /> LOGOUT
            </a>
          </li>
        </ul>
        {this.closeMenu(this.props)}
      </div>
    );
  }
  render() {
    if (this.props.admin) {
      return this.adminNavbar();
    } else if (this.props.retailer) {
      return this.retailerNavbar();
    } else if (this.props.loggedIn) {
      return this.tailorNavbar();
    } else {
      return (
        <ul className="navbar-links-ul">
          <NavigationLink
            cssClass="sign-in-link"
            route="/sign_in"
            text="Sign In"
          />
          <NavigationLink
            cssClass="sign-up-link"
            route="/sign_up"
            text="Sign Up"
          />

          <li className="signout-link">
            <a
              className="navbar-links-li"
              onClick={() => this.props.handleSignOut()}
            >
              <img src={logoutImage} alt="logout" /> LOGOUT
            </a>
          </li>
        </ul>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    store: store.currentStore,
  };
};

export default connect(mapStateToProps)(NavigationLinks);
