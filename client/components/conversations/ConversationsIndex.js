import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getConversations} from '../../actions';
import SectionHeader from '../SectionHeader';

class ConversationsIndex extends Component {
  componentDidMount(){
    this.props.getConversations(this.props.currentUser.user.store_id)
      .then(res => console.log('res', this.props.conversations))
      .catch(err => console.log('err', err))
  }

  renderConversations(props){
    const {conversations} = props;
    if (conversations.length > 0){
      console.log(props)
    }

    // return this.props.conversations.map((convo, index) => {
      // return (
      //   <div key={index}>
      //     <div className='order-row'>
      //       <Link to={route} className='flex-container'>
      //         <div className='order-data'>#{id}</div>
      //         <div className='order-data'style={{color}}>{status}</div>
      //         <div className='order-data'>{first_name} {last_name}</div>
      //         <div className='order-data'>{alterations_count}</div>
      //       </Link>
      //     </div>
      //     <hr className='order-row-hr' />
      //   </div>
      // )
    // })
  }

  render(){
    console.log(this.props)
    const headerText = 'Manage Messages';
    return (
      <div>
        <SectionHeader text={headerText} />
        {this.renderConversations(this.props)}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getConversations}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsIndex);
