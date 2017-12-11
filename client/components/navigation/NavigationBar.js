import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationLinks from './NavigationLinks';
import LogoMessage from '../LogoMessage';
import Hamburger from '../../images/hamburger.png';
import { logoutImage } from '../../images';
import { signOutCurrentUser } from '../../actions';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signOutCurrentUser }, dispatch);
};

class NavigationBar extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    signOutCurrentUser: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor() {
    super();
    this.state = {
      active: this.getNavActive(window),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleSignOut = () => {
    this.props
      .signOutCurrentUser()
      .then(res => {
        console.log('signed out');
      })
      .catch(err => {
        console.log('oops something went wrong');
      });
  };

  getNavActive(window) {
    return window.innerWidth > 980;
  }

  handleResize = () => {
    const state = this.getNavActive(window);
    this.setState({ active: state });
  };

  toggleActiveState = boolean => {
    // If the Nav Bar should NOT be open by default (based on the window size)
    if (!this.getNavActive(window)) {
      const state = !boolean;
      this.setState({ active: state });
    }
  };

  navBar() {
    const { loggedIn, admin, retailer } = this.props;
    const logoText = retailer ? 'STORE PORTAL' : 'SHOP PORTAL';
    const { active } = this.state;
    return (
      <nav className="navbar">
        <LogoMessage className="navbar-logo" text={logoText} />
        <div className="navbar-links-container">
          <NavigationLinks
            loggedIn={loggedIn}
            retailer={retailer}
            admin={admin}
            toggleNavState={this.toggleActiveState}
            navState={active}
            handleSignOut={this.handleSignOut}
          />
        </div>
      </nav>
    );
  }

  hamburger() {
    return (
      <img
        className="hamburger"
        src={Hamburger}
        alt="menu"
        onClick={() => this.toggleActiveState(this.state.active)}
      />
    );
  }

  render() {
    const { active } = this.state;
    if (active) {
      return this.navBar();
    } else {
      return this.hamburger();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
