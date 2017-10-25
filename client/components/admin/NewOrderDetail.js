import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {
  updateOrder,
  createShipment,
  setLoader,
  removeLoader,
  setGrowler,
} from '../../actions';
import {renderAlterationList} from '../../utils/alterationsLists';

import {
  getShippingType,
  getPrintButtonPrompt,
  lowerCaseFirstLetter,
  toSnakeCaseFromCamelCase,
} from '../shipping/shippingFunctions';

import OrderComplete from '../prints/OrderComplete.js';
import {SetFulfilledButton} from '../orders/orderForms/SetFulfilled';
import SelectTailor from '../orders/orderForms/SelectTailor';
//import UpdateNotes from '../orders/orderForms/UpdateNotes';

class NewOrderDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      loadingLabel: false,
      nots: '',
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setFulfilled = this.setFulfilled.bind(this);
    this.updateOrderNotes = this.updateOrderNotes.bind(this);
    this.fulfillOrder = this.fulfillOrder.bind(this);
  }

  refreshNewOrdersList(props) {
    this.props.getNewOrders().catch(err => console.log('error', err));
  }

  componentDidMount() {
    this.refreshNewOrdersList(this.props);
  }

  resetState(props) {
    this.setState(props.order);
  }

  updateOrderFromProps() {
    const order = this.props.order;
    this.setState({order});
  }

  updateState(field, value) {
    this.setState({[field]: value});
  }

  handleSubmit() {
    let obj = this.state;
    obj.id = this.props.order.id;
    this.props
      .updateOrder({order: obj})
      .then(res => {
        this.refreshNewOrdersList({order: {}});
        const message = 'Tailor Assigned';
        const kind = 'success';
        this.props.setGrowler({kind, message});
      })
      .catch(err => console.log('errr', err));
  }

  updateOrderNotes(notes, order) {
    order.requester_notes = notes;
    this.props.updateOrder({order}).catch(err => console.log('err', err));
  }

  makeShippingLabel(type, order_id) {
    const data = {shipment: {type, order_id}};
    createShipment(data)
      .then(res => {
        const order = res.data.body;
        this.props
          .updateOrder({order})
          .then(res => {
            this.props.selectOrder(order);
            this.setState({loadingLabel: false});
            this.props.removeLoader();
          })
          .catch(err => console.log('err', err));
      })
      .catch(err => console.log('err', err));
  }

  renderPrintLabels() {
    if (!this.props.order.fulfilled) {
      return;
    }

    const {currentUser, order} = this.props;
    const role = currentUser.user.roles[0].name;
    const shippingType = getShippingType(role, order.type);
    const printPrompt = getPrintButtonPrompt(
      shippingType,
      order,
      this.state.loadingLabel
    );

    if (printPrompt.split(' ')[0] === 'Print') {
      const url = this.props.order[
        toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))
      ].shipping_label;
      return (
        <div>
          <button className="pink-button" onClick={() => window.print()}>
            {printPrompt}
          </button>

          <OrderComplete shippingType={shippingType} />
        </div>
      );
    } else if (printPrompt.split(' ')[0] === 'Creating') {
      return (
        <button className="pink-button" disabled={this.state.loadingLabel}>
          {printPrompt}
        </button>
      );
    } else if (printPrompt.split(' ')[0] === 'Create') {
      return (
        <button
          className="pink-button"
          disabled={this.state.loadingLabel}
          onClick={() => this.makeShippingLabel(shippingType, order.id)}
        >
          {printPrompt}
        </button>
      );
    }
  }

  fulfillOrder(order) {
    const {id, store_id, type} = order;
    this.props.setLoader();
    const data = {
      order: {
        id,
        store_id,
        fulfilled: true,
      },
    };
    this.setState({loadingLabel: true});
    this.props
      .updateOrder(data)
      .then(res => {
        const role = this.props.currentUser.user.roles[0].name;
        const shippingType = getShippingType(role, type);
        this.makeShippingLabel(shippingType, order.id);
      })
      .catch(err => console.log(err));
  }

  renderFulfillButton() {
    if (this.props.order.outgoingShipment) {
      return this.renderPrintLabels(this.props.order);
    } else {
      return (
        <div>
          <button onClick={() => this.fulfillOrder()} className="pink-button">
            Fulfill This Order!
          </button>
        </div>
      );
    }
  }

  setFulfilled(order) {
    order.fulfilled = true;
    this.props.updateOrder({order}).catch(err => console.log('errr', err));
  }

  welcomeKit(order) {
    if (!order.fulfilled) {
      return (
        <div>
          <SetFulfilledButton order={order} onClick={this.fulfillOrder} />
        </div>
      );
    } else {
      return this.renderPrintLabels(order);
    }
  }

  updateNotes(notes) {
    this.setState({notes});
  }

  submitNotes(event) {
    event.preventDefault();

    const data = {
      order: {
        requester_notes: this.state.notes,
        id: this.props.order.id,
        store_id: this.props.order.store_id,
      },
    };

    const kind = 'success';
    const message = 'Notes Updated Successfully';
    this.props
      .updateOrder(data)
      .then(res => this.props.setGrowler({kind, message}))
      .catch(err => console.log(err));
  }

  renderNotes() {
    return (
      <form className="notes-form" onSubmit={e => this.submitNotes(e)}>
        <label>
          <h3>Order Notes:</h3>
          <br />
          <textarea
            cols={43}
            rows={10}
            defaultValue={this.props.order['requester_notes']}
            onChange={e => this.updateNotes(e.target.value)}
          />
        </label>
        <br />
        <input className="short-button" type="submit" value="Submit" />
        <hr />
      </form>
    );
  }

  render() {
    const {order} = this.props;
    if (order.customer) {
      const {id, weight, created_at, total, provider_notes, items} = order;
      const orderDate = moment(created_at).format('MM-DD-YYYY');
      const selectTailor = (
        <div>
          <p>Alterations:</p>
          {renderAlterationList(order.items, 'new-order-detail')}
          <SelectTailor
            onChange={this.updateState}
            provider_id={order.provider_id}
          />
          <button className="button short-button" onClick={this.handleSubmit}>
            Change Tailor
          </button>
        </div>
      );

      const display =
        order.type === 'TailorOrder' ? selectTailor : this.welcomeKit(order);

      return (
        <div className="order-details">
          <h3>Order Details:</h3>
          <p>Order ID: {id}</p>
          <p>Order Weight: {weight}</p>
          <p>Order Date: {orderDate}</p>
          <p>Total Charges: ${total}</p>
          <p>Order Notes:</p>
          {this.renderNotes()}
          {display}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = store => {
  return {
    tailors: store.tailorList,
    currentUser: store.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateOrder, setLoader, removeLoader, setGrowler},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderDetail);
