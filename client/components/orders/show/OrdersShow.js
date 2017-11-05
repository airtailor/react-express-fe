import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {
  getCurrentOrder,
  updateOrder,
  setLoader,
  removeLoader,
} from '../../../actions';


import {
  shipmentType,
  shipmentActions,
  getMailingLabelState,
  correctShipmentExists,
  fireShipmentCreate,
} from '../../shipping/shippingFunctions';

import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import SectionHeader from '../../SectionHeader';

import {
  tieImage,
  shirtImage,
  suitImage,
  skirtImage,
  dressImage,
  pantsImage,
} from '../../../images/garments';

import suppliesImage from '../../../images/supplies.png';
import logoImage from '../../../images/logo.png';
import Measurements from './measurements/Measurements';
import OrderComplete from '../../prints/OrderComplete.js';

class OrdersShow extends Component {
  constructor(props) {
    super();
    this.state = {
      notes: '',
      displayNotesForm: false,
      showMeasurements: false,
      loadingLabel: false
    };
  }

  refreshCurrentOrder() {
    this.props.setLoader();
    const {order_id} = this.props.match.params;
    const store_id = this.props.currentStore.id;
    const {getCurrentOrder} = this.props;

    getCurrentOrder(store_id, order_id)
      .then(() => this.props.removeLoader())
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.refreshCurrentOrder();
  }

  getUniqueItemTypes(items) {
    return uniqBy(items.map((i) => {
      return {type: i.item_type.name, items: []}
    }), 'type');
  }

  sortItemsByType() {
    const {items} = this.props.currentOrder;

    if (items == undefined) return [];

    const sortedItems = new Set(this.getUniqueItemTypes(items))

    for (var item of items) {
      const itemType = item.item_type.name
      const sortedItemsIterator = sortedItems.values()
      let sortingItem = true;

      while (sortingItem) {
        let currentIter = sortedItemsIterator.next()
        let currentValue = currentIter.value

        if (currentIter.done) {
          sortingItem = false;
        } else if (currentValue.type === itemType) {
          currentValue.items.push(item);
        }
      }
    }

    return [...sortedItems]
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
    const alt = {name: splitAlt[0] + ' - ', specific: splitAlt[1]};

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

  getImageForItemType(name) {
    switch (name) {
      case 'Pants':
        return pantsImage;
      case 'Shirt':
        return shirtImage;
      case 'Dress':
        return dressImage;
      case 'Suit Jacket':
        return suitImage;
      case 'Necktie':
        return tieImage;
      case 'Skirt':
        return skirtImage;
      default:
        return suppliesImage;
    }
  }

  renderList() {
    const renderAlt = this.renderAlteration;
    return this.sortItemsByType().map((itemType, index) => {
      const image = this.getImageForItemType(itemType.name);
      return itemType.items.map((item, index) => {
        const itemCaption = `${itemType.type} ${index + 1}`
        
        return (
          <div className="card" key={index}>
            <div className="type-heading">
              <img
                className="item-type-image"
                src={image}
                alt={itemType.name}
              />
              <h3>
                {itemCaption}
              </h3>
              <ul>{item.alterations.map(renderAlt)}</ul>
            </div>
          </div>
        );
      });
    });
  }

  disabledCustLink() {
    const {first_name, last_name} = this.props.currentOrder.customer;
    return (
      <div>
        <h3>Customer:</h3>
        <h3 className="blue-link">
          {`${first_name} ${last_name}`}
        </h3>
      </div>
    );;
  }

  enabledCustLink() {
    const {first_name, last_name, id} = this.props.currentOrder.customer;
    return (
      <div>
        <h3>Customer:</h3>
        <h3 className="blue-link">
          <Link to={`/customers/${id}/edit`}>
            {`${first_name} ${last_name}`}
          </Link>
        </h3>
      </div>
    );
  };

  orderNotes(field) {
    const notes = this.props.currentOrder[field] || 'Not Provided';
    const title = (field === 'provider_notes' ? 'Tailor Notes:' : 'Order Notes:');
    return (
      <div>
        <h3>{title}</h3>
        <p className="notes">{notes}</p>
      </div>
    );
  }

  updateNotes(notes) { this.setState({notes}); }

  submitNotes(event) {
    event.preventDefault();
    const {tailor} =  this.props.userRoles
    const key = tailor ? 'provider_notes' : 'requester_notes';
    const data = {
      order: {
        [key]: this.state.notes,
        id: this.props.currentOrder.id,
        store_id: this.props.currentOrder.store_id,
      },
    };
    this.props.updateOrder(data).catch(err => console.log(err));
  }

  checkOrderIn() {
    const data = {
      order: {
        id: this.props.currentOrder.id,
        store_id: this.props.currentOrder.store_id,
        arrived: true,
      },
    };
    this.props.updateOrder(data).catch(err => console.log(err));
  }

  fulfillOrder() {
    const {id: orderId, store_id: storeId} = this.props.currentOrder
    this.props.setLoader();
    const data = {
      order: {
        id: orderId,
        store_id: storeId,
        fulfilled: true,
      },
    };

    this.setState({loadingLabel: true});

    this.props
    .updateOrder(data)
    .then(res => {
      const {currentOrder: order, userRoles: roles} = this.props;
      const action = shipmentActions(order, roles);

      // this is something that'll need updates for messenger
      this.makeShippingLabel(action);
    })
    .catch(err => console.log(err));
  }

  renderArrivedButton() {
    return (
      <div>
        <button onClick={() => this.checkOrderIn()} className="pink-button">
          Check Order In
        </button>
      </div>
    );
  }

  renderCompletedButton() {
    return (
      <div>
        <button className="pink-button" disabled={true}>
          Order Completed ✔️
        </button>
      </div>
    );
  }

  renderFulfillButton() {
    return (
      <div>
        <button onClick={() => this.fulfillOrder()} className="pink-button">
          Fulfill This Order
        </button>
      </div>
    );
  }

  renderNotesForm() {
    if (this.state.displayNotesForm) {
      const {tailor: isTailor, admin: isAdmin} = this.props.userRoles;
      let prompt, party;

      if (isTailor) {
        prompt = 'Add Tailor Notes?';
        party = 'provider_notes';
      } else if (isAdmin) {
        prompt = 'Add Admin Notes?';
        party = 'requester_notes';
      }

      const notesField = this.props.currentOrder[party]

      return (
        <form className="notes-form" onSubmit={e => this.submitNotes(e)}>
          <label>
            <h3>{prompt}</h3>
            <br />
            <textarea
              cols={43}
              rows={10}
              defaultValue={notesField}
              onChange={e => this.updateNotes(e.target.value)}
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
  }

  renderEditOrder(roles, orderEditPath) {
    return (
      <div>
        <Link to={orderEditPath}>
          <input className="short-button" type="submit" value="Edit Order" />
        </Link>
      </div>
    );
  }

  renderPrintLabels() {
    const {currentUser, currentOrder, userRoles: roles} = this.props;
    // const shipmentType = shipmentType(role);
    const shipmentType = 'mail_shipment';

    const shipmentAction = shipmentActions(currentOrder, roles)
    const labelState = getMailingLabelState(roles, currentOrder, this.state.loadingLabel);
    const disabled = this.state.loadingLabel;

    const makeLabel  = this.makeShippingLabel
    const printLabel = this.printShippingLabel

    let onClick, orderComplete, printPrompt = null;

    switch(labelState) {
      case 'needs_label':
        printPrompt = 'Create Label'
        onClick = (() => makeLabel(shipmentAction, shipmentType));
        break;
      case 'in_progress':
        printPrompt = 'Creating Label'
      case 'Print':
        printPrompt = 'Print Label'
        onClick = (() => printLabel());
        orderComplete = (<OrderComplete shipmentType={shipmentType} />);
        break;
      default:
        break;
    }

    return (
      <div>
        <button className="pink-button" onClick={onClick} disabled={disabled}>
          {printPrompt}
        </button>
        {orderComplete}
      </div>
    );
  }


  showHideNotesForm() {
    this.setState({displayNotesForm: !this.state.displayNotesForm});
  }

  makeShippingLabel(action) {
    const order = this.props.currentOrder
    // const type = 'mail' || shipmentType(order)
    const type = 'mail_shipment'

    this.props.setLoader();
    fireShipmentCreate(order, action, type)
      .then(res => {
        this.setState({loadingLabel: false});
        this.refreshCurrentOrder();
      })
      .catch(err => console.log('err', err));
  }

  printShippingLabel() {
    return window.print()
  }

  renderToggleNotesFormButton() {
    return(
      <div>
        <button
          className="pink-button"
          onClick={() => this.showHideNotesForm()}
        >
        {this.state.displayNotesForm ? 'Hide' : 'Add Notes'}
        </button>
      </div>
    )
  }

  renderOrderControls() {
    const {
      userRoles: { admin, tailor, retailer, customer },
      currentOrder: { arrived, fulfilled }
    } = this.props

    let notesForm, arrivedButton, instructionButton, fulfillButton,
        labelButton, notesButton, completedButton

    if (tailor || admin) {
      notesForm = this.renderNotesForm()
      notesButton = this.renderToggleNotesFormButton()
      instructionButton = this.renderPrintInstructions()

      if (!arrived) {
        arrivedButton = this.renderArrivedButton()
      }

      if (arrived) {
        instructionButton = this.renderPrintInstructions()
        fulfillButton = this.renderFulfillButton()
      }

      if (arrived && fulfilled) {
        labelButton = this.renderPrintLabels()
        completedButton = this.renderCompletedButton()
      }
    }

    return (
      <div>
        {notesButton}
        {notesForm}
        {arrivedButton}
        {instructionButton}
        {fulfillButton}
        {completedButton}
        {labelButton}
      </div>
    );
  }

  renderOrderDetails() {
    const { userRoles: {admin, retailer, tailor, customer} } = this.props

    const renderList = this.renderList()
    const requesterNotes = this.orderNotes('requester_notes')
    const providerNotes =  this.orderNotes('provider_notes')
    const customerLink = ( tailor || admin ? this.enabledCustLink() : this.disabledCustLink() )

    return (
      <div>
        {renderList}
        {customerLink}
        {requesterNotes}
        {providerNotes}
      </div>
    );
  }

  renderPrintInstructions() {
    const {
      currentOrder: {
        id: orderId,
        requester_notes: requesterNotes,
        provider_notes: providerNotes,
        customer: { first_name: firstName, last_name: lastName },
      }
    } = this.props

    const orderNotes = requesterNotes ? requesterNotes : 'Not Provided';
    const tailorNotes = providerNotes ? providerNotes : 'Not Provided';
    const printableContent = this.renderList()
    const printLabel = this.printShippingLabel

    return (
      <div>
        <button className="pink-button" onClick={() => printLabel()}>
          Print Instructions
        </button>

        <div className="print print-instructions">
          <div>
            <img src={logoImage} style={{maxWidth: '100px'}} />
          </div>
          <h2>Alterations for Order #{orderId}</h2>
          <h4>
            Customer Name: {`${firstName} ${lastName}`}
          </h4>
          {printableContent}
          <h3>
            Order Notes: <p style={{display: 'inline'}}>{orderNotes}</p>
          </h3>
          <h3>
            Taior Notes: <p style={{display: 'inline'}}>{tailorNotes}</p>
          </h3>
        </div>
      </div>
    );
  }

  renderDetailsOrMeasurementsButton(roles, state) {
    const {showMeasurements} = this.state;
    const value = showMeasurements ? 'See Order Details' : 'See Measurements';
    const toggleFunction = this.toggleMeasurementDetailButton

    return (
      <input
        type="submit"
        value={value}
        className="short-button"
        onClick={ () => toggleFunction(showMeasurements) }
      />
    );
  }

  toggleMeasurementDetailButton(boolean) {
    this.setState({showMeasurements: !boolean});
  }

  renderMeasurements() {
    const {
      currentOrder: {
        order: {customer}
      }
    } = this.props
    return (<Measurements customer={customer} />)
  }

  setMainContent() {
    let mainContent

    if (this.state.showMeasurements) {
      const measurements = this.renderMeasurements()
      mainContent = (
        <div>
          {measurements}
        </div>
      )
    } else {
      const details = this.renderOrderDetails()
      const controls = this.renderOrderControls()
      mainContent = (
        <div>
          {details}
          {controls}
        </div>
      )
    }

    return mainContent
  }

  render() {
    const {
      currentStore: store,
      currentOrder: order
    } = this.props;

    let mainContent, headerText

    if (isEmpty(order)) {
      mainContent = <div />
      headerText = ''
    } else {
      mainContent = this.setMainContent()
      headerText = `Orders / ${store.name} / #${order.id}`
    }


    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="order-show">
          {mainContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCurrentOrder,
      updateOrder,
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersShow);
