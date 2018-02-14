import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import {
  getCurrentOrder,
  updateOrder,
  setLoader,
  removeLoader,
  setGrowler,
} from '../../../actions';

import {
  shipmentTypes,
  shipmentActions,
  labelState,
  messengerAllowed,
  fireShipmentCreate,
} from '../../shipping/shippingFunctions';

import logoImage from '../../../images/logo.png';
import SectionHeader from '../../SectionHeader';
import OrderComplete from '../../prints/OrderComplete';
import BackButton from '../../BackButton';
import RenderGarments from './RenderGarments';
import RenderOrderNotes from './RenderOrderNotes';
import RenderOrderDetails from './RenderOrderDetails';
import CustomerDetails from './CustomerDetails';
import CustomerMeasurementsLink from '../../CustomerMeasurementsLink';
import AddNotesButton from '../../AddNotesButton';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCurrentOrder,
      updateOrder,
      setLoader,
      removeLoader,
      setGrowler,
    },
    dispatch
  );
};

class OrdersShow extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    openOrders: PropTypes.array.isRequired, // mapStateToProps
    currentOrder: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    updateOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();
    this.state = {
      notes: '',
      displayNotesForm: false,
      loadingLabel: false,
      sendingMessenger: false,
    };
  }

  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    openOrders: PropTypes.array.isRequired, // mapStateToProps
    currentOrder: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    updateOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  refreshCurrentOrder() {
    this.props.setLoader();
    const { order_id } = this.props.match.params;
    const store_id = this.props.currentStore.id;
    const { getCurrentOrder } = this.props;

    getCurrentOrder(store_id, order_id)
      .then(() => this.props.removeLoader())
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.refreshCurrentOrder();
  }

  updateNotes(notes) {
    this.setState({ notes });
  }

  submitNotes(event) {
    event.preventDefault();
    const {
      currentOrder: { id: orderId, store_id: storeId },
      userRoles: { tailor },
    } = this.props;
    const key = tailor ? 'provider_notes' : 'requester_notes';
    const data = {
      order: { [key]: this.state.notes, id: orderId, store_id: storeId },
    };

    this.props
      .updateOrder(data)
      .then(res => {
        const kind = 'success';
        const message = 'Notes Updated Successfully';
        this.props.setGrowler({ kind, message });
        this.setState({ displayNotesForm: false });
      })
      .catch(err => console.log(err));
  }

  checkOrderIn = () => {
    const {
      currentOrder: { id: orderId, store_id: storeId },
      userRoles: { tailor },
    } = this.props;
    const data = { order: { id: orderId, store_id: storeId, arrived: true } };

    this.props.updateOrder(data).catch(err => console.log(err));
  };

  showHideNotesForm() {
    this.setState({ displayNotesForm: !this.state.displayNotesForm });
  }

  fulfillOrder = () => {
    const { currentOrder: { id: orderId, store_id: storeId } } = this.props;
    const data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

    this.props.setLoader();
    this.setState({ loadingLabel: true });

    this.props
      .updateOrder(data)
      .then(res => {
        const { currentOrder: order, userRoles: roles } = this.props;
        const shipmentAction = shipmentActions(order, roles);
        const shipmentType = shipmentTypes(roles);

        if (shipmentType.has('mail_shipment')) {
          this.makeShippingLabel(shipmentAction);
        }
      })
      .catch(err => console.log(err));
  };

  postShipment = (orders, action, type) => {
    this.props.setLoader();
    fireShipmentCreate(orders, action, type)
      .then(res => {
        if (res.data.body.errors) {
          const message = res.data.body.errors[0];
          const kind = 'warning';
          this.props.setGrowler({ kind, message });
        } else {
          this.refreshCurrentOrder();
        }
        this.setState({ loadingLabel: false });
        this.props.removeLoader();
      })
      .catch(err => console.log('err', err));
  };

  makeShippingLabel = action => {
    return this.postShipment(
      [this.props.currentOrder],
      action,
      'mail_shipment'
    );
  };

  printShippingLabel() {
    return window.print();
  }

  renderAlteration(alteration, index) {
    // original, blind stitch, and cuffed hems should be red
    const hemAlts = [
      'Shorten Pant Length - Original Hem',
      'Shorten Pant Length - Blind Stitch Hem',
      'Shorten Pant Length - Cuffed Hem',
    ];

    const className = hemAlts.includes(alteration.name) ? 'red' : '';
    const splitAlt = alteration.name.split(' - ');
    const alt = { name: splitAlt[0] + ' - ', specific: splitAlt[1] };

    if (splitAlt[1]) {
      return (
        <li key={index}>
          {alt.name}
          <span className={className}>{alt.specific}</span>
        </li>
      );
    } else {
      return <li key={index}>{alteration.name}</li>;
    }
  }

  renderArrivedButton = () => {
    return this.renderButton(
      'Check Order In',
      { disabled: false },
      this.checkOrderIn
    );
  };

  renderFulfillButton = () => {
    return this.renderButton(
      'Fulfill This Order',
      { disabled: false },
      this.fulfillOrder
    );
  };

  renderCompletedButton = () => {
    return this.renderButton('Order Completed ✔️', { disabled: true });
  };

  renderPrintLabel = () => {
    const { currentOrder: order, userRoles: roles } = this.props;
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
        printPrompt = 'Print Label';
        onClick = () => window.print();
        shipmentDiv = <OrderComplete />;
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
  };

  renderButton(text, params, callback = () => {}) {
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

  renderGarmentAlterations(garment) {
    if (garment.alterations.length > 0) {
      return garment.alterations.map((alt, index) => {
        return (
          <p key={index} className="cart-alteration">
            <span>{alt.name}</span>
          </p>
        );
      });
    } else {
      return <div />;
    }
  }

  renderNotesForm = () => {
    if (this.state.displayNotesForm) {
      const {
        userRoles: { tailor: isTailor, admin: isAdmin },
        currentOrder,
      } = this.props;

      let prompt, party;

      if (isTailor) {
        prompt = 'Update Tailor Notes';
        party = 'provider_notes';
      } else if (isAdmin) {
        prompt = 'Update Order Notes';
        party = 'requester_notes';
      }

      return (
        <form className="notes-form" onSubmit={e => this.submitNotes(e)}>
          <label>
            <h3 className="sans-serif">{prompt}</h3>
            <br />

            <textarea
              className="order-details-notes-textarea"
              defaultValue={currentOrder[party]}
              onChange={e => this.updateNotes(e.target.value)}
              cols={36}
              rows={10}
              placeholder="Is this a special order or customer? Enter any important notes about the overall order here to help us serve you best!"
            />
          </label>
          <br />
          <input className="short-button" type="submit" value="Submit" />
          <hr />
        </form>
      );
    } else {
      return <div />;
    }
  };

  renderToggleNotesFormButton = () => {
    const { displayNotesForm } = this.state;
    const { userRoles: { tailor, admin }, currentOrder } = this.props;
    let text = null;
    if (displayNotesForm) {
      text = 'Hide';
    } else {
      text = tailor ? 'Add Tailor Notes' : 'Add Order Notes';
    }

    return (
      <div>
        <div style={{ marginLeft: '15px' }}>
          <AddNotesButton
            text={text}
            onClick={() => this.showHideNotesForm()}
          />
        </div>
      </div>
    );
  };

  renderEmptyDiv() {
    return <div />;
  }

  renderEmptyButtonDivs(count) {
    const output = [];
    while (count > 0) {
      output.push(this.renderEmptyDiv);
      count--;
    }
    return output;
  }

  renderEditOrderButton() {
    const { userRoles: { admin }, currentOrder: order } = this.props;
    const orderEditPath = `/orders/${order.id}/edit`;

    if (admin) {
      return (
        <div>
          <Link to={orderEditPath}>
            <input className="short-button" type="submit" value="Edit Order" />
          </Link>
        </div>
      );
    }
  }

  renderOrderControls() {
    const { currentOrder: order, userRoles: roles } = this.props;
    const { admin, tailor, retailer, customer } = roles;
    const { arrived, fulfilled } = order;
    const action = shipmentActions(order, roles);

    // NOTE: This all needs to go into a higher-order interface component.
    // If a new button, is assigned, this will error out and help you realize it.
    let [
      notesForm,
      arrivedButton,
      instructionButton,
      fulfillButton,
      labelButton,
      messengerButton,
      notesButton,
      completedButton,
    ] = this.renderEmptyButtonDivs(8);

    if (tailor || admin) {
      notesForm = this.renderNotesForm;
      notesButton = this.renderToggleNotesFormButton;

      if (!arrived && !fulfilled) {
        arrivedButton = this.renderArrivedButton;
      }

      if (arrived && !fulfilled) {
        instructionButton = this.renderPrintInstructions;
        fulfillButton = this.renderFulfillButton;
      }

      if (arrived && fulfilled) {
        labelButton = this.renderPrintLabel;
        completedButton = this.renderCompletedButton;

        if (messengerAllowed(action, roles)) {
          messengerButton = this.renderSendMessenger;
        }
      }
    }

    return (
      <div>
        {notesButton()}
        {notesForm()}
        {arrivedButton()}
        {instructionButton()}
        {fulfillButton()}
        {completedButton()}
        {labelButton()}
      </div>
    );
  }

  orderTotal(total) {
    return (
      <div>
        <hr className="order-show-line" />
        <div style={{ marginLeft: '15px' }}>
          <h3>
            <span className="form-label">Total </span>
            <span
              style={{
                float: 'right',
                paddingRight: '15px',
                fontFamily: 'Raleway',
                fontWeight: 600,
              }}
            >
              ${total}
            </span>
          </h3>
        </div>
        <hr className="order-show-line" />
      </div>
    );
  }

  notes() {
    const { userRoles: { admin, retailer, tailor } } = this.props;
    if (retailer) {
      return <RenderOrderNotes {...this.props} />;
    } else if (tailor || admin) {
      return (
        <div>
          <RenderOrderNotes {...this.props} />
          {this.renderToggleNotesFormButton()}
          {this.renderNotesForm()}
        </div>
      );
    }
  }

  renderOrder() {
    const {
      currentOrder: { total, customer },
      currentOrder,
      userRoles: { admin, retailer, tailor },
    } = this.props;

    return (
      <div
        className="flex-container"
        style={{ justifyContent: 'space-between', maxWidth: '1200px' }}
      >
        <div
          style={{
            width: '52%',
            borderRight: '1px solid gray',
            paddingRight: '3%',
          }}
        >
          <h1 className="title">ORDER #{currentOrder.id}</h1>
          <RenderGarments {...this.props} />
          {this.orderTotal(total)}

          {this.notes()}
        </div>
        <div style={{ float: 'right', width: '40%' }}>
          <RenderOrderDetails {...this.props} />
          <hr className="order-show-line" style={{ margin: '20px 0px' }} />
          <CustomerDetails {...this.props} />
          <CustomerMeasurementsLink customer={customer} />
        </div>
      </div>
    );
  }

  renderPrintInstructions = () => {
    const {
      currentOrder: {
        id: orderId,
        requester_notes: requesterNotes,
        provider_notes: providerNotes,
        customer: { first_name: firstName, last_name: lastName },
      },
    } = this.props;

    const orderNotes = requesterNotes || 'Not Provided';
    const tailorNotes = providerNotes || 'Not Provided';

    return (
      <div>
        {this.renderButton('Print Instructions', { disabled: false }, () =>
          window.print()
        )}
        <div className="print print-instructions">
          <div>
            <img src={logoImage} style={{ maxWidth: '100px' }} />
          </div>
          <h2>Alterations for Order #{orderId}</h2>
          <h4>Customer Name: {`${firstName} ${lastName}`}</h4>
          <RenderGarments {...this.props} />
          <h3>
            Order Notes: <p style={{ display: 'inline' }}>{orderNotes}</p>
          </h3>
          <h3>
            Taior Notes: <p style={{ display: 'inline' }}>{tailorNotes}</p>
          </h3>
        </div>
      </div>
    );
  };

  setMainContent() {
    let mainContent;

    mainContent = (
      <div>
        <BackButton {...this.props} />
        {this.renderEditOrderButton()}
        {this.renderOrder()}
        {/*this.renderOrderControls()*/}
      </div>
    );

    return mainContent;
  }

  render() {
    const { currentStore: store, currentOrder: order } = this.props;
    let mainContent = <div />;
    let headerText = '';

    if (!isEmpty(order)) {
      mainContent = this.setMainContent();
      headerText = `Orders / ${store.name} / #${order.id}`;
    }

    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="order-show">{mainContent}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersShow);
