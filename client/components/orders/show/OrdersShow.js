import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getCurrentOrder, updateOrder, createShipment } from '../../../actions';
import isEmpty from 'lodash/isEmpty';
import SectionHeader from '../../SectionHeader';
import shirtImage from '../../../images/shirt.png';
import pantsImage from '../../../images/pants.png';
import tieImage from '../../../images/tie.png';
import dressImage from '../../../images/dress.png';
import suitJacketImage from '../../../images/suit-jacket.png';
import suppliesImage from '../../../images/supplies.png';
import Measurements from './measurements/Measurements';

class OrdersShow extends Component {
  constructor(props){
    super();
    this.state = {
      notes: '',
      displayNotesForm: false,
      showMeasurements: false
    }
  }

  refreshCurrentOrder(){
    const { order_id } = this.props.match.params;
    const store_id = this.props.currentStore.id;
    const { getCurrentOrder } = this.props;
    getCurrentOrder(store_id, order_id)
      .catch(err => console.log(err));
  }

  componentDidMount(){
    this.refreshCurrentOrder();
  }

  setNotes(props){
    if (props.currentUser.user.roles[0].name === 'tailor'){
      return props.currentOrder.provider_notes;
    }
  }

  filterByItemType(item, type){
    return item.item_type.name == type.name;
  }

  itemTypesList(){
    return this.props.currentOrder.items.map(item => {
      return item.item_type.name
    });
  }

  removeDuplicates(arr){
    return arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
  }

  sortItemsByType(){
    const { items } = this.props.currentOrder;
    const itemTypes = this.removeDuplicates(this.itemTypesList());
    return itemTypes.reduce((newList, type)=> {
      const filteredItems = items.filter(item => {
        return item.item_type.name == type;
      });

      if (filteredItems.length > 0){
        const newValue = { name: type, filteredItems };
        newList.push(newValue);
      }
      return newList;
    }, []);
  }

  renderAlteration(alteration, index){
    return <li key={index}>{alteration.name}</li>;
  }

  renderItem(item, index){
    const renderAlt = this.renderAlteration;

    return (
      <li className='type-list' key={index}>
       { item.item_type.name } #{index + 1}
       <ul>
         { item.alterations.map(renderAlt)}
       </ul>
      </li>
    )
  }

  getImageForItemType(name){
    switch (name){
      case 'Pants':
        return pantsImage;
      case 'Shirt':
        return shirtImage;
      case 'Dress':
        return dressImage;
      case 'Jacket':
        return suitJacketImage;
      case 'Tie':
        return tieImage;
      default:
        return suppliesImage;
    }
  }

  renderList(){
    return this.sortItemsByType().map((itemType, index) => {
      const image = this.getImageForItemType(itemType.name);
      return (
        <div className='card' key={index}>
          <div className='type-heading'>
            <img className='item-type-image' src={image} alt={itemType.name} />
            <h3>{itemType.name.toUpperCase()}</h3>
          </div>

          <ul>
            {itemType.filteredItems.map(this.renderItem.bind(this))}
          </ul>
        </div>
      );
    });
  }

  orderNotes(party_notes){
    const notes = this.props.currentOrder[party_notes] || 'N/A';
    const title = party_notes === 'provider_notes' ? 'Tailor Notes:' : 'Order Notes:';
    return (
      <div>
        <h3>{title}</h3>
        <p className='notes'>{notes}</p>
      </div>
    );
  }

  updateNotes(notes){
    this.setState({notes});
  }

  submitNotes(event){
    event.preventDefault();
    const key = this.props.currentUser.user.roles[0].name === 'tailor' ? 'provider_notes' : 'requester_notes';
    const data = { order: {[key]: this.state.notes, id: this.props.currentOrder.id, store_id: this.props.currentOrder.store_id }};
    this.props.updateOrder(data)
      .catch(err => console.log(err));
  }

  notesForm(){
    if (this.state.displayNotesForm){
      const role = this.props.currentUser.user.roles[0].name;
      let prompt;
      let party;

      if (role === 'tailor'){
        prompt = 'Add Tailor Notes?'
        party = 'provider_notes';
      } else if (role === 'admin') {
        prompt = 'Add Admin Notes?'
        party = 'requester_notes';
      }

      return (
        <form className='notes-form' onSubmit={(e) => this.submitNotes(e)}>
          <label>
           <h3>{ prompt }</h3>
           <br />
            <textarea
              cols={43} rows={10}
              defaultValue={this.props.currentOrder[party]}
              onChange={(e) => this.updateNotes(e.target.value) }>
            </textarea>
          </label>
          <br />
          <input className='short-button' type="submit" value="Submit" />
          <hr />
        </form>
      );
    } else {
      return <div></div>;
    }
  }

  checkOrderIn(){
    const data = { order: {id: this.props.currentOrder.id, store_id: this.props.currentOrder.store_id, arrived: true }};
    this.props.updateOrder(data)
      .catch(err => console.log(err));
  }

  renderArrivedButton() {
    if (!this.props.currentOrder.arrived){
      return (
        <div>
          <button onClick={() => this.checkOrderIn()} className='pink-button'>
            Check Order In
          </button>
        </div>
      );
    }
  }

  fulfillOrder(){
    const data = { order: {id: this.props.currentOrder.id, store_id: this.props.currentOrder.store_id, fulfilled: true }};
    this.props.updateOrder(data)
      .then(res => this.refreshCurrentOrder())
      .catch(err => console.log(err));
  }

  renderFulfillButton(){
    const {arrived, fulfilled} = this.props.currentOrder;
    if (arrived && !fulfilled){
      return (
        <div>
          <button onClick={() => this.fulfillOrder()} className='pink-button'>
            Fulfill This Order
          </button>
        </div>
      );
    } else if (arrived && fulfilled){
      return (
        <div>
          <button className='pink-button' disabled={true}>
            Order Completed ✔️
          </button>
        </div>
      );
    }
  }

  showHideNotesForm(){
    const value = !this.state.displayNotesForm;
    this.setState({ displayNotesForm: value });
  }

  deleteOrder(){
    console.log('delete');
  }

  makeShippingLabel(type){
    const data = { shipment: { type, order_id: this.props.currentOrder.id }};
    createShipment(data)
      .then(res => this.refreshCurrentOrder())
      .catch(err => console.log(err));
  }

  getShippingType(role, orderType){
    if (role === 'tailor'){
      return 'OutgoingShipment';
    } else if (role === 'sales_associate' && orderType !== 'WelcomeKit'){
      return 'IncomingShipment';
    } else if (orderType === 'WelcomeKit'){
      return 'OutgoingShipment';
    } else {
      return 'IncomingShipment';
      // if it gets here, we need to handle an error message
      console.log('wtf fix this - ordersshow renderPrintLabels()');
    }
  }

  toSnakeCaseFromCamelCase(string){
   return string.replace(/([A-Z])/g, letter => {
     return `_${letter.toLowerCase()}`;
   });
  }

  lowerCaseFirstLetter(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
  }


  labelExists(shippingType, order){
    const key = this.toSnakeCaseFromCamelCase(this.lowerCaseFirstLetter(shippingType));
    if (order[key]){
      return order[key].shipping_label ? true : false
    }
    return false;
  }

  getPrintButtonPrompt(shippingType, order){
    const verb = this.labelExists(shippingType, order) ?
      'Print' :
      'Create';

    return `${verb} Shipping Label`
  }

  printShippingLabel(type){
    const key = this.toSnakeCaseFromCamelCase(this.lowerCaseFirstLetter(type));
    const label = this.props.currentOrder[key];
  }

  renderPrintLabels(){
    const { currentUser, currentOrder } = this.props;
    const role = currentUser.user.roles[0].name;
    const shippingType = this.getShippingType(role, currentOrder.type);
    const printPrompt = this.getPrintButtonPrompt(shippingType, currentOrder);

    if (printPrompt.split(' ')[0] === "Print"){
      const url=currentOrder[this.toSnakeCaseFromCamelCase(this.lowerCaseFirstLetter(shippingType))].shipping_label;
      return (
        <a href={url} target='blank'>
          <button className='pink-button'>
            {printPrompt}
          </button>
        </a>
      );
    } else if (printPrompt.split(' ')[0] === 'Create'){
      return (
        <button className='pink-button' onClick={() => this.makeShippingLabel(shippingType)}>
          {printPrompt}
        </button>
      );
    }
  }

  renderEditOrder(role, orderEditPath){
    if (role === 'admin'){
      return (
        <div>
          <Link to={orderEditPath}>
            <input className='short-button' type="submit" value="Edit Order" />
          </Link>
        </div>
      )
    }
  }

  renderOrderDetails(){
    return (
      <div>
        { this.renderList() }
        { this.orderNotes('requester_notes') }
        { this.orderNotes('provider_notes') }
        <button className='pink-button' onClick={() => this.showHideNotesForm()}>{this.state.displayNotesForm ? 'Hide' : 'Add Notes'}</button>
        { this.notesForm() }
        { this.renderArrivedButton() }
        { this.renderFulfillButton() }
        { this.renderPrintLabels() }
      </div>
    );
  }

  showHideDeatilsOrCustomerMeasurementsButton(boolean){
    const value = !boolean;
    this.setState({showMeasurements: value});
  }

  renderDetailsOrMeasurementsbutton(state){
    const {showMeasurements} = this.state;
    const value = showMeasurements ? 'See Order Details' : 'See Measurements';
    return (
      <input
        type='submit'
        value={value}
        className='short-button'
        onClick={() => this.showHideDeatilsOrCustomerMeasurementsButton(showMeasurements)}/>
    )
  }

  render(){
    const { currentStore, currentOrder} = this.props;
    const { customer } = currentOrder;
    const orderEditPath = `/orders/${currentOrder.id}/edit`;
    const headerText=`Orders / ${currentStore.name} / #${currentOrder.id}`;

    if (!isEmpty(currentOrder)){
      const customerRoute = `/customers/${customer.id}/edit`;
      const mainContent = !this.state.showMeasurements ? this.renderOrderDetails() : <Measurements customer={customer}/>;
      return (
        <div>
          <SectionHeader text={headerText} linkTo={customerRoute} linkText={ customer.first_name + ' ' + customer.last_name} />
          <div className='order-show'>
           { this.renderEditOrder(this.props.currentUser.user.roles[0].name, orderEditPath) }
           { this.renderDetailsOrMeasurementsbutton(this.state) }

            { mainContent }

          </div>
        </div>
      );
    } else {
      //debugger;
      return (
        <div>
          <SectionHeader text={headerText} />
          <div>Loading..</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    currentOrder: store.currentOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentOrder, updateOrder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersShow);
