import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Router(props){
  return (
    <BrowserRouter>
      <div>
        <NavigationBar/>

        <hr/>

        <Route exact path="/" component={App} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
     </div>

    </BrowserRouter>
  );
};
