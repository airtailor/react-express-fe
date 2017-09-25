import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {
  getConversations,
  getMessages,
  createMessage,
  updateMessage,
} from '../../actions';
import SectionHeader from '../SectionHeader';

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      newMessage: '',
    };
    this.submitMessage = this.submitMessage.bind(this);
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
    const {store_id} = this.props.currentUser.user;
    this.props
      .getConversations(store_id)
      .then(res => {
        if (this.props.store.name === 'Air Tailor') {
          this.props.getMessages(
            this.props.store.id,
            this.props.match.params.id
          );
        } else {
          const conversation_id = self.props.conversations[0].id;
          this.props.getMessages(store_id, conversation_id);
        }
      })
      .catch(err => console.log('err', err));
  }

  renderDate(date, className) {
    return (
      <div className="message-date">
        <h3 className={className}>{date}</h3>
      </div>
    );
  }

  renderMessages(messages) {
    const {user} = this.props.currentUser;
    let messageDate, showDate;
    return messages.map((message, index) => {
      showDate = false;
      const {body, store_id, store, created_at} = message;
      const className = store_id === user.store_id ? 'sender' : 'receiver';

      const messageTime = moment(created_at).format('hh:mm a');
      const momentDate = moment(created_at).format('MMMM DD');

      if (messageDate !== momentDate) {
        messageDate = momentDate;
        showDate = true;
      }

      return (
        <div key={index} className={className}>
          {showDate ? this.renderDate(messageDate, className) : ''}
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

  submitMessage(e) {
    e.preventDefault();
    const {newMessage} = this.state;

    const role = this.props.currentUser.user.roles[0].name;
    const conversation_id =
      role === 'admin'
        ? this.props.match.params.id
        : this.props.conversations[0].id;

    const store_id = this.props.store.id;
    const message = {body: newMessage, conversation_id, store_id};

    this.props
      .createMessage(message)
      .then(res => this.setState({newMessage: ''}))
      .catch(err => console.log(err));
  }

  updateNewMessage(text) {
    this.setState({newMessage: text});
  }

  renderMessageForm() {
    return (
      <div className="messages-form">
        <form onSubmit={this.submitMessage}>
          <textarea
            className="text-area"
            onChange={e => this.updateNewMessage(e.target.value)}
            value={this.state.newMessage}
          />

          <input type="submit" className="button short-button" value="Send" />
        </form>
      </div>
    );
  }

  markMessagesRead(props) {
    if (props.messages.length > 0) {
      const role = props.currentUser.user.roles[0].name;
      const messageCheck = role === 'admin' ? 'sender_read' : 'recipient_read';

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
    const headerText = `Messages / ${this.props.store.name}`;
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

const mapStateToProps = store => {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser,
    messages: store.messages,
    store: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getConversations, getMessages, createMessage, updateMessage},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
