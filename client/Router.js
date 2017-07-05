import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Router = (props) => {
  console.log('router', props)
  return (
    <BrowserRouter>
      <div>
        <NavigationBar/>

        <hr/>
        <Route exact path="/" component={Home} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
     </div>

    </BrowserRouter>
  );
};

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser
  }
}

export default connect(mapStateToProps)(Router);
