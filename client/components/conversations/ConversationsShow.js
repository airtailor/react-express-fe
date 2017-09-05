import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {getConversations, getMessages, createMessage, updateMessage} from '../../actions';
import SectionHeader from '../SectionHeader';

class Messages extends Component {
  constructor(){
    super();
    this.state = {
      newMessage: ''
    }

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount(){
    const self = this;
    const {store_id} = this.props.currentUser.user;
    this.props.getConversations(store_id)
      .then(res => {
        if (this.props.store.name === 'Air Tailor'){
          console.log("THE STORE IS AIR TAILOR");
          this.props.getMessages(this.props.store.id, this.props.match.params.id);
        } else {
          const conversation_id = self.props.conversations[0].id;
          this.props.getMessages(store_id, conversation_id)
        }
      })
      .catch(err => console.log('err', err))
  }

  renderMessages(messages){
    const {user} = this.props.currentUser;;
    return messages.map((message, index) => {
      const {body, store_id, store, created_at} = message;
      const className = store_id === user.store_id ? 'sender' : 'receiver';

      //const time = moment(created_at);
      //const offset = moment().utcOffset() / 60;
      //const localTime = time.add(offset, 'h');

      const messageTime = moment(created_at).format('hh:mm a');
      const messageDate = moment(created_at).format('MM-DD-YYYY');
      return (
        <div className={className + ' message'} key={index}>
          <b>{store.name}</b> // General Message // {messageDate} at {messageTime}
          <hr/>
          {body}
        </div>
      );
    })
  }

  submitMessage(e){
    e.preventDefault();
    const {newMessage} = this.state;

    const role = this.props.currentUser.user.roles[0].name;
    const  conversation_id = role === 'admin' ? this.props.match.params.id : this.props.conversations[0].id;

    const store_id = this.props.store.id;
    const message = {body: newMessage, conversation_id, store_id};

    this.props.createMessage(message)
      .then(res => this.setState({newMessage: ''}))
      .catch(err => console.log(err));
  }

  updateNewMessage(text){
    this.setState({newMessage: text});
  }

  renderMessageForm(){
    return (
      <div className='messages-form'>
        <form onSubmit={this.submitMessage}>
          <h2>New Message</h2>
          <textarea
            cols={43} rows={10}
            onChange={(e) => this.updateNewMessage(e.target.value)}
            value={this.state.newMessage}>
          </textarea>
          <br />

          <input type='submit' className='button short-button' value='submit' />
        </form>
      </div>
    );
  }

  markMessagesRead(props){
    if (props.messages.length > 0){
      const role = props.currentUser.user.roles[0].name;
      const messageCheck = role === 'admin' ? 'sender_read' : 'recipient_read';

      // find # of unread messages in conversation
      const unreads = props.messages.filter(mess => {
        return !mess[messageCheck]
      });

      // if # of unread messages is > 0 then mark all of them as read
      if (unreads.length > 0){
        unreads.forEach(mess => {
          mess[messageCheck] = true;
          props.updateMessage(mess)
        })
      }
    }
  }

  render(){
    const headerText = `Messages / ${this.props.store.name}`;
    this.markMessagesRead(this.props);
    return(
      <div>
        <SectionHeader text={headerText} />
        <div className='content'>
          <div className='messages-container'>
            {this.renderMessageForm()}
            {this.renderMessages(this.props.messages)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser,
    messages: store.messages,
    store: store.currentStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getConversations, getMessages, createMessage, updateMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
