import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link } from'react-router-dom';
import { getStoreOrders } from '../actions'; 

class StoreOrders extends Component {
  componentDidMount(){
    this.props.getStoreOrders(this.props.currentUser.user.store_id).catch(err => console.log(err));
  }

  formatDueDate(dueDate, late){
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate)
    const diff = momentDueDate.diff(todaysDate, 'days');
    const additionalString = late ? " days late" : " days to go";
    const status = (diff + additionalString).toUpperCase();
    return status;
  }

  getOrderStatus(order){
    if (!order.due_date){
      return {status: 'In Transit', color: 'green'};
    } else if (order.late){
      let dueTime = this.formatDueDate(order.due_date, true);
      return {status: dueTime, color: 'red'};
    } else {
      let dueTime = this.formatDueDate(order.due_date, false);
      return {status: dueTime, color: 'orange'};
    } 
  }

  renderOrderRows(){
    const { openOrders } = this.props;
    if (openOrders) {
      return openOrders.map((order, i) => {
        const orderStatus = this.getOrderStatus(order);
        const { id, customer, alterations_count } = order;
        const { first_name, last_name } = customer;
        const { color, status} = orderStatus;
        const route = `/orders/${id}`;
        return (
            <tr key={id}>
              <td><Link to={route}>#{id}</Link></td>
              <td style={{color: color}}>{status}</td>
              <td>{first_name} {last_name}</td>
              <td>{alterations_count}</td>
            </tr>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render(){
    return (
      <div>
        <h3>Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            { this.renderOrderRows() }
          </tbody>
        </table>
      </div>
   );
 }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getStoreOrders}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreOrders);
