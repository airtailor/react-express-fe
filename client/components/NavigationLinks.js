import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import SearchBar from './SearchBar';
import Intercom from 'react-intercom';
import {
  editStoreImage,
  logoutImage,
  messageImage,
  homeImage,
  ordersImage,
  archivedImage,
  tailorsImage,
} from '../images';

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
            cssClass="conversations-link"
            route="/conversations"
            text="Conversations"
            image={messageImage}
          />

          <NavigationLink
            cssClass="edit-store-link"
            route={editStoreRoute}
            text="Edit Store"
            image={editStoreImage}
          />

          <NavigationLink
            cssClass="new-store-link"
            route="/stores/new"
            text="New Store"
            image={homeImage}
          />

          <NavigationLink
            cssClass="new-order-link"
            route="/orders/new"
            text="New Order"
            image={homeImage}
          />

          <NavigationLink
            cssClass="new-order-link"
            route="/admin/companies/new"
            text="New Company"
            image={homeImage}
          />

          <NavigationLink
            cssClass="new-order-link"
            route="/admin/tailors"
            text="Tailors"
            image={tailorsImage}
          />

          <NavigationLink
            cssClass="new-order-link"
            route="/admin/retailers"
            text="Retailers"
            image={tailorsImage}
          />

          <li>
            <a
              className="navbar-links-li close-menu-link"
              onClick={() => toggleNavState(navState)}
            >
              <img src={logoutImage} alt="logout" /> Close Menu
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
            cssClass="messages-link"
            route="/messages"
            text="Messages"
            image={messageImage}
          />

          <NavigationLink
            cssClass="edit-store-link"
            route={editStoreRoute}
            text="Account"
            image={editStoreImage}
          />
        </ul>
        {this.closeMenu(this.props)}
      </div>
    );
  }

  closeMenu(props) {
    const { toggleNavState, navState } = props;
    if (window.innerWidth < 981) {
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
    const user = {
      user_id: currentUser.user.id,
      email: currentUser.user.email,
      name: currentUser.user.email,
    };

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
            cssClass="messages-link"
            route="/messages"
            text="Messages"
            image={messageImage}
          />

          <NavigationLink
            cssClass="edit-store-link"
            route={editStoreRoute}
            text="Account"
            image={editStoreImage}
          />
        </ul>
        {this.closeMenu(this.props)}
        <div className="add">
          <Intercom appID="j5szofcq" {...user} />
        </div>
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
