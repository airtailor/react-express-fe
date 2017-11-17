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
//import {renderAlterationList} from '../../utils/alterationsLists';

import {
  shipmentType,
  shipmentActions,
  getLabelState,
  makeShippingLabel,
} from '../shipping/shippingFunctions';

import WelcomeKitPrint from '../prints/WelcomeKitPrint.js';
import {SetFulfilledButton} from '../orders/orderForms/SetFulfilled';
import SelectTailor from '../orders/orderForms/SelectTailor';
// import UpdateNotes from '../orders/orderForms/UpdateNotes';

class NewOrderDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      loadingLabel: false,
      notes: '',
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
    this.props.setLoader();
    let obj = this.state;
    obj.id = this.props.order.id;
    this.props
      .updateOrder({order: obj})
      .then(res => {
        this.refreshNewOrdersList({order: {}});
        const message = 'Tailor Assigned';
        const kind = 'success';
        this.props.setGrowler({kind, message});
        this.props.removeLoader();
      })
      .catch(err => console.log('errr', err));
  }

  updateOrderNotes(notes, order) {
    order.requester_notes = notes;
    this.props.updateOrder({order}).catch(err => console.log('err', err));
  }

  makeShippingLabel(type, order) {
    const data = {shipment: {type, order_id: order.id}};
    // here, we pass in our shipment stuff
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

  renderPrintLabels(order) {
    const roles = this.props.userRoles;
    const shippingType = shipmentType(roles, order.type);
    const printPrompt = getPrintButtonPrompt(shippingType, order);

    if (printPrompt.split(' ')[0] === 'Print') {
      const url = this.props.order[
        toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))
      ].shipping_label;
      return (
        <div>
          <button className="pink-button" onClick={() => window.print()}>
            {printPrompt}
          </button>

          <WelcomeKitPrint />
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

  renderGarmentAlterations(garment) {
    return garment.alterations.map((alt, index) => {
      return (
        <p key={index} className="cart-alteration">
          {alt.name}
        </p>
      );
    });
  }

  renderGarments(garments) {
    return garments.map((garment, index) => {
      return (
        <div key={index}>
          <h3>{garment.name}</h3>
          {this.renderGarmentAlterations(garment)}
          <hr />
        </div>
      );
    });
  }

  render() {
    const {order} = this.props;
    if (order.customer) {
      const {
        id,
        weight,
        created_at,
        total,
        provider_notes,
        items,
        provider_id,
      } = order;

      const tailorId = provider_id ? provider_id : '';
      const orderDate = moment(created_at).format('MM-DD-YYYY');

      const selectTailor = (
        <div>
          <p>Alterations:</p>

          {this.renderGarments(order.items)}
          <SelectTailor onChange={this.updateState} provider_id={tailorId} />
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
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateOrder, setLoader, removeLoader, setGrowler},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderDetail);
