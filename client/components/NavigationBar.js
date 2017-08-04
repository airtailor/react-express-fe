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
    this.toggleActiveState = this.toggleActiveState.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  getNavActive(window){
    return window.innerWidth < 751 ? false : true;
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
    const { loggedIn, admin } = this.props;
    const { active } = this.state;
    return (
      <nav className="navbar">
        <LogoMessage className='navbar-logo' text='SHOP PORTAL' />
        <div className="navbar-links-container">
          <NavigationLinks loggedIn={loggedIn} admin={admin} toggleNavState={this.toggleActiveState} navState={active}/>
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
      console.log('nav')
      return this.navBar();
    } else {
      console.log('burger')
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
