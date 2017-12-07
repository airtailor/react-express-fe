import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { getCurrentStore, getOrderAndMessagesCount } from '../actions';
import SectionHeader from './SectionHeader';
import OrderCard from './OrderCard';
import OrderCardIcon from './OrderCardIcon';
import { ordersImage, messageImage, exclamationImage } from '../images';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCurrentStore }, dispatch);
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      active_orders_count: 0,
      late_orders_count: 0,
      unread_messages_count: 0,
    };
  }

  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    getCurrentStore: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    console.log('home');
    const {
      currentUser: { user: { store_id: storeId } },
      getCurrentStore,
    } = this.props;

    getOrderAndMessagesCount(storeId).then(res => {
      this.setState(res.data.body);
    });

    getCurrentStore(storeId).catch(err => {
      console.log(err);
    });
  }

  retailerHome(currentStore) {
    const {
      active_orders_count,
      late_orders_count,
      unread_messages_count,
    } = this.state;

    return (
      <div className="store-boxes">
        <OrderCard
          icon={<OrderCardIcon url={ordersImage} alt="orders" />}
          count={active_orders_count}
          type="Current"
          call="VIEW >"
          styleClass="current-orders"
        />

        <OrderCard
          icon={<OrderCardIcon url={messageImage} alt="messages" />}
          count={unread_messages_count}
          type="Unread"
          call="READ >"
          styleClass="unread-messages"
        />
      </div>
    );
  }

  adminHome(currentStore) {
    const {
      active_orders_count,
      late_orders_count,
      unread_messages_count,
    } = this.state;
    return (
      <div className="store-boxes">
        <OrderCard
          icon={<OrderCardIcon url={exclamationImage} alt="orders" />}
          count={late_orders_count}
          type="Late"
          call="FULFILL >"
          styleClass="late-orders"
        />

        <OrderCard
          icon={<OrderCardIcon url={ordersImage} alt="orders" />}
          count={active_orders_count}
          type="Current"
          call="VIEW >"
          styleClass="current-orders"
        />

        <OrderCard
          icon={<OrderCardIcon url={messageImage} alt="messages" />}
          count={unread_messages_count}
          type="Unread"
          call="READ >"
          styleClass="unread-messages-admin"
        />
      </div>
    );
  }

  tailorHome(currentStore) {
    const {
      active_orders_count,
      late_orders_count,
      unread_messages_count,
    } = this.state;
    return (
      <div className="store-boxes">
        <OrderCard
          icon={<OrderCardIcon url={exclamationImage} alt="orders" />}
          count={late_orders_count}
          type="Late"
          call="FULFILL >"
          styleClass="late-orders"
        />

        <OrderCard
          icon={<OrderCardIcon url={ordersImage} alt="orders" />}
          count={active_orders_count}
          type="Current"
          call="VIEW >"
          styleClass="current-orders"
        />

        <OrderCard
          icon={<OrderCardIcon url={messageImage} alt="messages" />}
          count={unread_messages_count}
          type="Unread"
          call="READ >"
          styleClass="unread-messages"
        />
      </div>
    );
  }

  renderCards(roles, currentStore) {
    if (roles.tailor) {
      return this.tailorHome(currentStore);
    } else if (roles.admin) {
      return this.adminHome(currentStore);
    } else if (roles.retailer) {
      return this.retailerHome(currentStore);
    }
  }

  renderStore() {
    if (!isEmpty(this.props.currentStore)) {
      const { currentStore, currentUser, userRoles } = this.props;
      const { id, name } = currentStore;
      const roles = userRoles;
      const storeEditPath = `/stores/${id}/edit`;
      const storeOrShop = roles.retailer ? 'store' : 'shop';

      return (
        <div className="home">
          <h2 className="greeting">Greetings, {name}</h2>
          <p className="greeting">
            Here's what's happening with your {storeOrShop} right now.
          </p>
          {this.renderCards(roles, currentStore)}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div>
        <SectionHeader
          text={`Home / ${this.props.currentStore.name}`}
          showCart={!this.props.userRoles.tailor ? true : false}
          link={'/orders/new'}
          rotate={''}
        />
        {this.renderStore()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
