import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  updateOrder,
  createShipment,
  setLoader,
  removeLoader,
  setGrowler,
} from '../../actions';

import {
  shipmentTypes,
  shipmentActions,
  labelState,
  makeShippingLabel,
  fireShipmentCreate,
} from '../shipping/shippingFunctions';

import WelcomeKitPrint from '../prints/WelcomeKitPrint.js';
import SelectTailor from '../orders/orderForms/SelectTailor';

const mapStateToProps = store => {
  return {
    tailors: store.tailorList,
    currentUser: store.currentUser,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updateOrder, setLoader, removeLoader, setGrowler },
    dispatch
  );
};

class NewOrderDetail extends Component {
  static propTypes = {
    tailors: PropTypes.array.isRequired, // mapStateToProps
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    updateOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();
    this.state = {
      loadingLabel: false,
      notes: '',
      provider_id: '',
    };
  }

  refreshNewOrdersList(props) {
    const { setLoader, getNewOrders, removeLoader } = this.props;
    setLoader();
    getNewOrders().then(() => removeLoader());
  }

  componentDidMount() {
    this.refreshNewOrdersList(this.props);
  }

  resetState(props) {
    this.setState(props.order);
  }

  updateOrderFromProps() {
    const order = this.props.order;
    this.setState({ order });
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = () => {
    this.props.setLoader();
    let obj = this.state;
    obj.id = this.props.order.id;
    this.props
      .updateOrder({ order: obj })
      .then(res => {
        this.refreshNewOrdersList({ order: {} });
        const message = 'Tailor Assigned';
        const kind = 'success';
        this.props.setGrowler({ kind, message });
        this.props.removeLoader();
      })
      .catch(err => console.log('errr', err));
  };

  updateOrderNotes = (notes, order) => {
    order.requester_notes = notes;
    this.props.updateOrder({ order }).catch(err => console.log('err', err));
  };

  postShipment = (orders, action, type) => {
    this.props.setLoader();
    fireShipmentCreate(orders, action, type)
      .then(res => {
        this.setState({ loadingLabel: false });
        this.props.removeLoader();
        this.props.selectOrder(orders[0]);
      })
      .catch(err => console.log('err', err));
  };

  makeShippingLabel = action => {
    return this.postShipment([this.props.order], action, 'mail_shipment');
  };

  renderFulfillButton() {
    return this.renderButton(
      'Fulfill This Order',
      { disabled: false },
      this.fulfillOrder
    );
  }

  renderButton(text, params, callback = () => console.log('')) {
    const className = params.className || 'pink-button';
    const clickArgs = params.clickArgs || undefined;
    const disabled = params.disabled;
    return (
      <div>
        <button
          onClick={() => callback(clickArgs)}
          disabled={disabled}
          className={className}
        >
          {text}
        </button>
      </div>
    );
  }

  renderPrintLabel() {
    const { order, userRoles: roles } = this.props;
    const disabled = this.state.loadingLabel;
    const shipmentAction = shipmentActions(order, roles);

    let onClick, printPrompt, clickArgs, shipmentDiv;
    switch (labelState(roles, order, disabled)) {
      case 'needs_label':
        printPrompt = 'Create Label';
        onClick = this.makeShippingLabel;
        clickArgs = shipmentAction;
        break;
      case 'in_progress':
        printPrompt = 'Creating Label';
      case 'label_created':
        this.refreshNewOrdersList();
        printPrompt = 'Print Label';
        onClick = () => window.print();
        // NOTE: we need to make sure that orderComplete gets the correct shipment.
        shipmentDiv = <WelcomeKitPrint />;
        break;
      default:
        break;
    }

    return (
      <div>
        {this.renderButton(
          printPrompt,
          { disabled: disabled, clickArgs: clickArgs },
          onClick
        )}
        {shipmentDiv}
      </div>
    );
  }

  fulfillOrder = () => {
    const { order: { id: orderId, store_id: storeId } } = this.props;
    const data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

    this.props.setLoader();
    this.setState({ loadingLabel: true });

    this.props
      .updateOrder(data)
      .then(res => {
        const { order, userRoles: roles } = this.props;
        const shipmentAction = shipmentActions(order, roles);
        const shipmentType = shipmentTypes(roles);

        if (shipmentType.has('mail_shipment')) {
          this.makeShippingLabel(shipmentAction);
        }
      })
      .catch(err => console.log(err));
  };

  welcomeKit(order) {
    if (!order.fulfilled) {
      return this.renderFulfillButton();
    } else {
      return this.renderPrintLabel();
    }
  }

  updateNotes(notes) {
    this.setState({ notes });
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
      .then(res => this.props.setGrowler({ kind, message }))
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
    const { order } = this.props;
    if (order.customer) {
      const { id, weight, created_at, total, provider_notes, items } = order;
      const { provider_id } = this.state;

      const orderDate = moment(created_at).format('MM-DD-YYYY');

      const selectTailor = (
        <div>
          <p>Alterations:</p>

          {this.renderGarments(order.items)}
          <SelectTailor onChange={this.updateState} tailorId={provider_id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderDetail);
