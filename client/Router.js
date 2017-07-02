import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Router = (props) => {
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

export default Router;
