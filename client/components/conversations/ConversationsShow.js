import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {getConversations, getMessages, createMessage} from '../../actions';
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
          debugger;
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
      const messageDate = moment(created_at).format('MM-DD-YYYY');

      const time = moment(created_at);
      const offset = moment().utcOffset() / 60;
      const local = time.add(offset, 'h');
      const messageTime = time.format('hh:mm a');
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
    const {store_id, conversation_id} = this.props.conversations[0];
    const message = {body: newMessage, conversation_id, store_id};
    debugger;
    createMessage(message)
      .then(res => {
        debugger;
      })
  }

  updateNewMessage(e){
    this.setState({newMessage: e});
  }

  renderMessageForm(){
    return (
      <form onSubmit={this.submitMessage}>
        <textarea
          onChange={(e) => this.updateNewMessage(e.target.value)}
          value={this.state.newMessage}>
        </textarea>
        <br />

        <input type='submit' className='button short-button' value='submit' />
      </form>
    );
  }

  render(){
    console.log('check', this.props)
    const headerText = `Messages / ${this.props.store.name}`;
    return(
      <div>
        <SectionHeader text={headerText} />
        <div className='content'>
          Messages
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
  return bindActionCreators({getConversations, getMessages}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
