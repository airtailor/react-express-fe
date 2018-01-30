import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBar from './components/navigation/NavigationBar';
import AvailableRoutes from './routes/';
import SignIn from './components/auth/SignIn';
import Growler from './components/growler';
import Loader from './components/loader';
import Intercom from 'react-intercom';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    userRoles: store.userRoles,
  };
};

class Router extends Component {
  constructor() {
    super();
    this.state = {
      pageLoaded: false,
    };
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.setState({ pageLoaded: true });
      }, 2000);
    });
  }

  renderIntercom(user) {
    if (this.state.pageLoaded) {
      return (
        <div className="add">
          <Intercom appID="j5szofcq" {...user} />
        </div>
      );
    }
  }

  render() {
    const {
      currentUser: { isAuthenticated: loggedIn },
      currentUser,
      userRoles: { admin, retailer, tailor },
      currentStore: { name: storeName },
    } = this.props;

    const user = {
      user_id: currentUser.user.id,
      email: currentUser.user.email,
      name: currentUser.user.email,
    };

    if (loggedIn) {
      return (
        <BrowserRouter>
          <div className="container">
            <Growler />
            <Loader />
            <NavigationBar
              retailer={retailer}
              loggedIn={loggedIn}
              admin={admin}
              tailor={tailor}
            />

            <AvailableRoutes
              retailer={retailer}
              loggedIn={loggedIn}
              admin={admin}
              tailor={tailor}
            />

            {this.renderIntercom(user)}
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div>
            <Growler />
            <AvailableRoutes
              retailer={false}
              loggedIn={false}
              admin={false}
              tailor={false}
            />

            {this.renderIntercom(user)}
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default connect(mapStateToProps)(Router);
