import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import ConversationShow from '../../components/conversations/ConversationsShow';
import ConversationsIndex from '../../components/conversations/ConversationsIndex';

class ConversationRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };
  render() {
    const {admin} = this.props;
    return (
      <div>
        <Route
          exact
          path="/conversations"
          render={props =>
            admin ? <ConversationsIndex {...props} /> : <Redirect to="/" />}
        />

        <Route
          exact
          path="/conversations/:id"
          render={props =>
            admin ? <ConversationShow {...props} /> : <Redirect to="/" />}
        />
      </div>
    );
  }
}

export default ConversationRoutes;
