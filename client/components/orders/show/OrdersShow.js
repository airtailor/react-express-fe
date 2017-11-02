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
      loadingLabel: false,
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

  setNotes(props) {
    if (props.userRoles.tailor) {
      return props.currentOrder.provider_notes;
    } else if (props.userRoles.admin) {
      return props.currentOrder.requester_notes;
    }
  }

  filterByItemType(item, type) {
    return item.item_type.name == type.name;
  }

  itemTypesList() {
    return this.props.currentOrder.items.map(item => {
      return item.item_type.name;
    });
  }

  removeDuplicates(arr) {
    return arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
  }

  sortItemsByType() {
    const {items} = this.props.currentOrder;
    const itemTypes = this.removeDuplicates(this.itemTypesList());
    return itemTypes.reduce((newList, type) => {
      const filteredItems = items.filter(item => {
        return item.item_type.name == type;
      });

      if (filteredItems.length > 0) {
        const newValue = {name: type, filteredItems};
        newList.push(newValue);
      }
      return newList;
    }, []);
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
      return itemType.filteredItems.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="type-heading">
              <img
                className="item-type-image"
                src={image}
                alt={itemType.name}
              />
              <h3>
                {item.item_type.name} #{index + 1}
              </h3>
              <ul>{item.alterations.map(renderAlt)}</ul>
            </div>
          </div>
        );
      });
    });
  }

  customerLink() {
    const {first_name, last_name, id} = this.props.currentOrder.customer;
    const linkToCustomer = `/customers/${id}/edit`;
    const name = `${first_name} ${last_name}`;

    const roles = this.props.userRoles;

    if (roles.retailer) {
      return (
        <div>
          <h3>Customer:</h3>
          <h3 className="blue-link">{name}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Customer:</h3>
          <h3 className="blue-link">
            <Link to={linkToCustomer}>{name}</Link>
          </h3>
        </div>
      );
    }
  }

  orderNotes(party_notes) {
    const notes = this.props.currentOrder[party_notes] || 'Not Provided';
    const title =
      party_notes === 'provider_notes' ? 'Tailor Notes:' : 'Order Notes:';
    return (
      <div>
        <h3>{title}</h3>
        <p className="notes">{notes}</p>
      </div>
    );
  }

  updateNotes(notes) {
    this.setState({notes});
  }

  submitNotes(event) {
    event.preventDefault();
    const roles =  this.props.userRoles
    const key = roles.tailor ? 'provider_notes' : 'requester_notes';
    const data = {
      order: {
        [key]: this.state.notes,
        id: this.props.currentOrder.id,
        store_id: this.props.currentOrder.store_id,
      },
    };
    this.props.updateOrder(data).catch(err => console.log(err));
  }

  notesForm() {
    if (this.state.displayNotesForm) {
      const roles = this.props.userRoles;
      let prompt;
      let party;

      if (roles.tailor) {
        prompt = 'Add Tailor Notes?';
        party = 'provider_notes';
      } else if (roles.admin) {
        prompt = 'Add Admin Notes?';
        party = 'requester_notes';
      }

      return (
        <form className="notes-form" onSubmit={e => this.submitNotes(e)}>
          <label>
            <h3>{prompt}</h3>
            <br />
            <textarea
              cols={43}
              rows={10}
              defaultValue={this.props.currentOrder[party]}
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

  renderArrivedButton() {
    if (!this.props.currentOrder.arrived) {
      return (
        <div>
          <button onClick={() => this.checkOrderIn()} className="pink-button">
            Check Order In
          </button>
        </div>
      );
    }
  }

  fulfillOrder() {
    const roles = this.props.userRoles;
    if (roles.tailor || roles.admin) {
      this.props.setLoader();
      const data = {
        order: {
          id: this.props.currentOrder.id,
          store_id: this.props.currentOrder.store_id,
          fulfilled: true,
        },
      };
      this.setState({loadingLabel: true});
      this.props
      .updateOrder(data)
      .then(res => {
        const order = this.props.currentOrder;
        const {type} = order;
        const action = this.shipmentAction(order, roles);

        this.makeShippingLabel(action);
      })
      .catch(err => console.log(err));
    } else {
      return
    }
  }

  renderFulfillButton() {
    const roles = this.props.userRoles
    const {arrived, fulfilled} = this.props.currentOrder;

    if (roles.tailor || roles.admin) {
      if (arrived && !fulfilled) {
        return (
          <div>
          <button onClick={() => this.fulfillOrder()} className="pink-button">
          Fulfill This Order
          </button>
          </div>
        );
      } else if (arrived && fulfilled) {
        return (
          <div>
          <button className="pink-button" disabled={true}>
          Order Completed ✔️
          </button>
          </div>
        );
      }
    }
  }

  showHideNotesForm() {
    this.setState({displayNotesForm: !this.state.displayNotesForm});
  }

  makeShippingLabel(action) {
    const order = this.props.currentOrder
    const type = 'mail' || shipmentTyp

    this.props.setLoader();
    fireShipmentCreate(order, action, type)
      .then(res => {
        this.setState({loadingLabel: false});
        this.refreshCurrentOrder();
      })
      .catch(err => console.log('err', err));
  }

  renderPrintLabels() {
    if (!this.props.currentOrder.fulfilled) {
      return;
    }

    const {currentUser, currentOrder, userRoles} = this.props;
    const roles = userRoles;
    // const shipmentType = shipmentType(role);
    const shipmentType = 'mail';

    const shipmentAction = shipmentActions(currentOrder, roles)
    const labelState = getLabelState(roles, currentOrder, this.state.loadingLabel);
    const disabled = this.state.loadingLabel;

    let onClick, orderComplete, printPrompt = null;

    switch(labelState) {
      case 'needs_label':
        printPrompt = 'Create Label'
        onClick = this.makeShippingLabel(shipmentAction, shipmentType);
        break;
      case 'in_progress': 
        printPrompt = 'Creating Label'
      case 'Print':
        printPrompt = 'Print Label'
        onClick = this.printShippingLabel();
        orderComplete = (<OrderComplete shipmentType={shippingType} />);
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

  printShippingLabel() {
    return window.print()
  }

  renderEditOrder(roles, orderEditPath) {
    if (roles.admin) {
      return (
        <div>
          <Link to={orderEditPath}>
            <input className="short-button" type="submit" value="Edit Order" />
          </Link>
        </div>
      );
    }
  }

  editComponents() {
    const {retailer} = this.props.userRoles

    if (!retailer) {
      return (
        <div>
          <button
            className="pink-button"
            onClick={() => this.showHideNotesForm()}
          >
            {this.state.displayNotesForm ? 'Hide' : 'Add Notes'}
          </button>
          {this.notesForm()}
          {this.renderArrivedButton()}
          {this.renderPrintInstructions()}
          {this.renderFulfillButton()}
          {this.renderPrintLabels()}
        </div>
      );
    } else {
      return <div />;
    }
  }

  renderOrderDetails() {
    return (
      <div>
        {this.renderList()}
        {this.customerLink()}
        {this.orderNotes('requester_notes')}
        {this.orderNotes('provider_notes')}
        {this.editComponents()}
      </div>
    );
  }

  // renderControlsForRole() {
  //   const roles = this.props.userRoles
  //   const {admin, tailor, retailer, customer} = roles
  //
  //   // renderArrivedButton(), calling checkOrderIn()
  //   // renderFulfillButton(), calling fulfillOrder()
  //   // renderPrintINstructions(), does a bunch of stuff
  //   // renderPrintLabels(), calling a bunch of stuff
  //   // renderEditOrder(), only allowed for admin
  // }

  renderPrintInstructions() {
    if (!this.props.currentOrder.fulfilled && this.props.currentOrder.arrived) {
      const {requester_notes, provider_notes} = this.props.currentOrder;
      const orderNotes = requester_notes ? requester_notes : 'Not Provided';
      const tailorNotes = provider_notes ? provider_notes : 'Not Provided';

      return (
        <div>
          <button className="pink-button" onClick={() => window.print()}>
            Print Instructions
          </button>

          <div className="print print-instructions">
            <div>
              <img src={logoImage} style={{maxWidth: '100px'}} />
            </div>
            <h2>Alterations for Order #{this.props.currentOrder.id}</h2>
            <h4>
              Customer Name: {this.props.currentOrder.customer.first_name}{' '}
              {this.props.currentOrder.customer.last_name}
            </h4>
            {this.renderList()}
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
  }

  showHideDeatilsOrCustomerMeasurementsButton(boolean) {
    const value = !boolean;
    this.setState({showMeasurements: value});
  }

  renderDetailsOrMeasurementsButton(roles, state) {
    if (!roles.retailer) {
      const {showMeasurements} = this.state;
      const value = showMeasurements ? 'See Order Details' : 'See Measurements';
      return (
        <input
          type="submit"
          value={value}
          className="short-button"
          onClick={() =>
            this.showHideDeatilsOrCustomerMeasurementsButton(showMeasurements)}
        />
      );
    } else {
      return <div />;
    }
  }

  render() {
    const {currentStore, currentOrder, currentUser, userRoles} = this.props;
    const {customer} = currentOrder;
    const orderEditPath = `/orders/${currentOrder.id}/edit`;
    const headerText = `Orders / ${currentStore.name} / #${currentOrder.id}`;
    const roles = userRoles;

    if (!isEmpty(currentOrder)) {
      const customerRoute = `/customers/${customer.id}/edit`;
      const mainContent = !this.state.showMeasurements ? (
        this.renderOrderDetails()
      ) : (
        <Measurements customer={customer} />
      );
      return (
        <div>
          <SectionHeader text={headerText} />
          <div className="order-show">
            {this.renderEditOrder(roles, orderEditPath)}
            {this.renderDetailsOrMeasurementsButton(roles, this.state)}
            {mainContent}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <SectionHeader text={headerText} />
          <div>Loading..</div>
        </div>
      );
    }
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
