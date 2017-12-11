import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConversationShow from '../../components/conversations/ConversationsShow';

class MessageRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <Route
          exact
          path="/messages"
          render={props =>
            loggedIn ? <ConversationShow {...props} /> : <Redirect to="/" />}
        />
      </div>
    );
  }
}

export default MessageRoutes;
