import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationLinks from './NavigationLinks';
import LogoMessage from './LogoMessage';
import Hamburger from '../images/hamburger.png';
import logoutImage from '../images/logout.png';
import {signOutCurrentUser} from '../actions';

class NavigationBar extends Component {
  constructor(){
    super();
    this.state = {
      active: this.getNavActive(window)
    }
    // Need to bind toggleActiveState in order to pass it down as a prop to
    // the NavigationLinks component
    this.toggleActiveState = this.toggleActiveState.bind(this);

    // Need to bind handleResize in order to maintain the component as 'this'
    // after it is passed to the event listeners in comoponentWillMount and
    // componentDidMount
    this.handleResize = this.handleResize.bind(this);
  }

  handleSignOut(){
    this.props.signOutCurrentUser()
    .then(res => {
      console.log('signed out');
    })
    .catch(err => {
      console.log('oops something went wrong');
    })
  }

  getNavActive(window){
    return window.innerWidth < 816 ? false : true;
  }

  handleResize(){
    const state = this.getNavActive(window);
    this.setState({active: state});
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  toggleActiveState(boolean){
    const state = !boolean;
    this.setState({active: state});
  }

  navBar(){
    const { loggedIn, admin, retailer } = this.props;
    const logoText = retailer ? 'STORE PORTAL' : 'SHOP PORTAL';
    const { active } = this.state;
    return (
      <nav className="navbar">
        <LogoMessage className='navbar-logo' text={logoText} />
        <div className="navbar-links-container">
          <NavigationLinks loggedIn={loggedIn} retailer={retailer} admin={admin} toggleNavState={this.toggleActiveState} navState={active}/>
        </div>
        <li className="signout-link"><a className="navbar-links-li" onClick={() => this.handleSignOut() }>
          <img src={logoutImage} alt='logout' /> LOGOUT
        </a></li>
      </nav>
    );
  }

  hamburger(){
    return (
      <img
        className='hamburger'
        src={Hamburger}
        alt='menu'
        onClick={() => this.toggleActiveState(this.state.active)} />
    )
  }

  render(){
    const { active } = this.state;
    if (active){
      return this.navBar();
    } else {
      return this.hamburger();
    }
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signOutCurrentUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
