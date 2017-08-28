import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationLinks from './NavigationLinks';
import LogoMessage from './LogoMessage';
import Hamburger from '../images/hamburger.png';

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
    const { active } = this.state;
    return (
      <nav className="navbar">
        <LogoMessage className='navbar-logo' text='SHOP PORTAL' />
        <div className="navbar-links-container">
          <NavigationLinks loggedIn={loggedIn} retailer={retailer} admin={admin} toggleNavState={this.toggleActiveState} navState={active}/>
        </div>
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

export default connect(mapStateToProps)(NavigationBar);
