import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {
  getConversations,
  getMessages,
  createMessage,
  updateMessage,
} from '../../actions';
import SectionHeader from '../SectionHeader';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    messages: store.messages,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getConversations, getMessages, createMessage, updateMessage },
    dispatch
  );
};

class Messages extends Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired, // mapStateToProps
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    messages: PropTypes.array.isRequired, // mapDispatchToProps
    currentStore: PropTypes.object.isRequired, // mapDispatchToProps
    getConversations: PropTypes.func.isRequired, // mapDispatchToProps
    getMessages: PropTypes.func.isRequired, // mapDispatchToProps
    createMessage: PropTypes.func.isRequired, // mapDispatchToProps
    updateMessage: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor() {
    super();
    this.state = {
      newMessage: '',
    };
  }

  scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.scrollToBottom(document.getElementById('message-list'));
    }
  }

  componentDidMount() {
    this.scrollToBottom(document.getElementById('message-list'));
    const self = this;
    const { store_id } = this.props.currentUser.user;
    this.props
      .getConversations(store_id)
      .then(res => {
        if (this.props.currentStore.name === 'Air Tailor') {
          this.props.getMessages(
            this.props.currentStore.id,
            this.props.match.params.id
          );
        } else {
          const conversation_id = self.props.conversations[0].id;
          this.props.getMessages(store_id, conversation_id);
        }
      })
      .catch(err => console.log('err', err));
  }

  renderDate(date) {
    return (
      <div className="message-date">
        <h3>{date}</h3>
      </div>
    );
  }

  renderMessages(messages) {
    const { user } = this.props.currentUser;
    let messageDate, showDate;
    return messages.map((message, index) => {
      showDate = false;
      const { body, store_id, store, created_at } = message;
      const className = store_id === user.store_id ? 'sender' : 'receiver';

      const messageTime = moment(created_at).format('hh:mm a');
      const momentDate = moment(created_at).format('MMMM DD');

      if (messageDate !== momentDate) {
        messageDate = momentDate;
        showDate = true;
      }

      return (
        <div key={index}>
          {showDate ? this.renderDate(messageDate) : ''}
          <div className={className + ' message'}>
            <div className="message-heading">
              <h4>{store.name}</h4> <h4>{messageTime}</h4>
            </div>
            <p>{body}</p>
          </div>
        </div>
      );
    });
  }

  submitMessage = e => {
    e.preventDefault();
    const { newMessage } = this.state;

    const roles = this.props.userRoles;
    const conversation_id = roles.admin
      ? this.props.match.params.id
      : this.props.conversations[0].id;

    const store_id = this.props.currentStore.id;
    const message = { body: newMessage, conversation_id, store_id };

    this.props
      .createMessage(message)
      .then(res => this.setState({ newMessage: '' }))
      .catch(err => console.log(err));
  };

  updateNewMessage(text) {
    this.setState({ newMessage: text });
  }

  renderMessageForm() {
    return (
      <div className="messages-form">
        <form onSubmit={this.submitMessage}>
          <div className="messages-form-inner-box">
            <textarea
              className="text-area"
              onChange={e => this.updateNewMessage(e.target.value)}
              value={this.state.newMessage}
            />

            <input
              type="submit"
              className="button message-button"
              value="SEND"
            />
          </div>
        </form>
      </div>
    );
  }

  markMessagesRead(props) {
    if (props.messages.length > 0) {
      const roles = props.userRoles;
      const messageCheck = roles.admin ? 'sender_read' : 'recipient_read';

      // find # of unread messages in conversation
      const unreads = props.messages.filter(mess => {
        return !mess[messageCheck];
      });

      // if # of unread messages is > 0 then mark all of them as read
      if (unreads.length > 0) {
        unreads.forEach(mess => {
          mess[messageCheck] = true;
          props.updateMessage(mess);
        });
      }
    }
  }

  render() {
    const headerText = `Messages / ${this.props.currentStore.name}`;
    this.markMessagesRead(this.props);
    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="content">
          <div className="messages-container">
            <div id="message-list" className="message-list">
              {this.renderMessages(this.props.messages)}
            </div>
          </div>
        </div>
        {this.renderMessageForm()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
