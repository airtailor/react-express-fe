import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { getCurrentStore, getOrderAndMessagesCount } from '../actions';
import SectionHeader from './SectionHeader';
import OrderCard from './OrderCard';
import OrderCardIcon from './OrderCardIcon';
import ordersImage from '../images/orders.png';
import messagesImage from '../images/message.png';
import exclamationImage from '../images/red-exclamation.png';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      active_orders_count: 0,
      late_orders_count: 0,
      unread_messages_count: 0
    }
  }

  componentDidMount(){
    const {currentUser, getCurrentStore} = this.props;
    getOrderAndMessagesCount(this.props.currentUser.user.store_id)
      .then(res => {
        this.setState(res.data.body)
      })
    getCurrentStore(currentUser.user.store_id)
      .catch(err => {
        console.log(err);
      })
  }

  retailerHome(currentStore){
    const {active_orders_count, late_orders_count, unread_messages_count} = this.state;
    return (
      <div className='store-boxes'>
        <OrderCard
          icon={<OrderCardIcon url={ordersImage} alt='orders' />}
          count={active_orders_count}
          type='Current'
          call='VIEW >'
          styleClass='current-orders' />

        <OrderCard
          icon={<OrderCardIcon url={messagesImage} alt='messages' />}
          count={unread_messages_count}
          type='Unread'
          call='READ >'
          styleClass='unread-messages' />
      </div>
    )
  }

  adminHome(currentStore){
    const {active_orders_count, late_orders_count, unread_messages_count} = this.state;
    return (
      <div className='store-boxes'>
        <OrderCard
          icon={<OrderCardIcon url={exclamationImage} alt='orders' />}
          count={late_orders_count}
          type='Late'
          call='FULFILL >'
          styleClass='late-orders' />

        <OrderCard
          icon={<OrderCardIcon url={ordersImage} alt='orders' />}
          count={active_orders_count}
          type='Current'
          call='VIEW >'
          styleClass='current-orders' />

        <OrderCard
          icon={<OrderCardIcon url={messagesImage} alt='messages' />}
          count={unread_messages_count}
          type='Unread'
          call='READ >'
          styleClass='unread-messages-admin' />
      </div>
    )
  }

  tailorHome(currentStore){
    const {active_orders_count, late_orders_count, unread_messages_count} = this.state;
    return (
      <div className='store-boxes'>
        <OrderCard
          icon={<OrderCardIcon url={exclamationImage} alt='orders' />}
          count={late_orders_count}
          type='Late'
          call='FULFILL >'
          styleClass='late-orders' />

        <OrderCard
          icon={<OrderCardIcon url={ordersImage} alt='orders' />}
          count={active_orders_count}
          type='Current'
          call='VIEW >'
          styleClass='current-orders' />

        <OrderCard
          icon={<OrderCardIcon url={messagesImage} alt='messages' />}
          count={unread_messages_count}
          type='Unread'
          call='READ >'
          styleClass='unread-messages' />
      </div>
    )
  }

  renderCards(role, currentStore){
    switch (role) {
      case 'tailor':
        return this.tailorHome(currentStore);
        break;
      case 'admin':
        return this.adminHome(currentStore);
        break;
      case 'retailer':
        return this.retailerHome(currentStore);
        break;
      default:
        return <div>Store Details</div>;
    }
  }

  renderStore(){
    if (!isEmpty(this.props.currentStore)){
      const {currentStore, currentUser} = this.props;
      const {id, name} = currentStore;
      const role = currentUser.user.roles[0].name;
      const storeEditPath = `/stores/${id}/edit`;
      const storeOrShop = role === 'retailer' ? 'store' : 'shop';

      return (
        <div className='home'>
          <h2 className='greeting'>Greetings, {name}</h2>
          <p className='greeting'>
            Here's what's happening with your {storeOrShop} right now.
          </p>
          {this.renderCards(role, currentStore)}
        </div>
      );
    } else {
      return <div></div>
    }
  }


  render(){
    return(
      <div>
        <SectionHeader 
          text={`Home / ${this.props.currentStore.name}`} 
          showCart={this.props.currentUser.user.roles[0].name !== 'tailor' ? 
            true : false}
           link={'/orders/new'}
           rotate={'0'} />
        { this.renderStore() }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
