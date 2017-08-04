import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getCurrentOrder, updateOrder, createShipment } from '../actions';
import isEmpty from 'lodash/isEmpty';
import SectionHeader from './SectionHeader';

class OrdersShow extends Component {
  constructor(props){
    super();
    this.state = { 
      notes: '',
      displayNotesForm: false
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

  renderItem(item, index){
    return (
      <li key={index}>
       { item.item_type.name } #{index + 1}  
      </li>
    )
  }

  renderList(){
    return this.sortItemsByType().map((itemType, index) => {
      return (
        <div key={index}>
          <h3>{ itemType.name.toUpperCase() }</h3>
          <ul>
            { itemType.filteredItems.map(this.renderItem) }
          </ul>
        </div>
      );
    });
  }

  orderNotes(party_notes){
    const notes = this.props.currentOrder[party_notes] || 'N/A';
    const title = party_notes === 'provider_notes' ? 'Tailor Notes' : 'Order Notes';
    return (
      <div>
        <h3>{title}</h3>
        <p>{notes}</p>
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
        <form onSubmit={(e) => this.submitNotes(e)}>
          <label>
           { prompt }
           <br />
            <textarea
              defaultValue={this.props.currentOrder[party]}
              onChange={(e) => this.updateNotes(e.target.value) }>
            </textarea>
          </label>
          <input type="submit" value="Submit" />
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
      return <div><button onClick={() => this.checkOrderIn()}>Check Order In</button></div>;
    }
  }

  fulfillOrder(){
    const data = { order: {id: this.props.currentOrder.id, store_id: this.props.currentOrder.store_id, fulfilled: true }};
    this.props.updateOrder(data)
      .catch(err => console.log(err));
  }

  renderFulfillButton(){
    if (this.props.currentOrder.arrived){
      return <div><button onClick={() => this.fulfillOrder()}>Fulfill This Order</button></div>;
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

  getShippingType(role){
    if (role === 'tailor'){
      return 'OutgoingShipment';
    } else if (role === 'sales_associate' && currentOrder.type !== 'WelcomeKit'){
      return 'IncomingShipment';
    } else if (currentOrder.type === 'WelcomeKit'){
      return 'OutgoingShipment';
    } else {
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
    const shippingType = this.getShippingType(role);
    const printPrompt = this.getPrintButtonPrompt(shippingType, currentOrder);

    if (printPrompt.split(' ')[0] === "Print"){
      const url=currentOrder[this.toSnakeCaseFromCamelCase(this.lowerCaseFirstLetter(shippingType))].shipping_label;
      return (
        <a href={url} target='blank'>
          <button>
            {printPrompt}
          </button>
        </a>
      );
    } else if (printPrompt.split(' ')[0] === 'Create'){
      return (
        <button onClick={() => this.makeShippingLabel(shippingType)}>
          {printPrompt}
        </button>
      );
    }
  }

  render(){
    const { currentStore, currentOrder} = this.props;
    const { customer } = currentOrder;
    const orderEditPath = `/orders/${currentOrder.id}/edit`;
    const headerText=`Orders / ${currentStore.name} / #${currentOrder.id}`;

    if (!isEmpty(currentOrder)){
      const customerRoute = `/customers/${customer.id}/edit`;
      return (
        <div>
          <SectionHeader text={headerText} linkTo={customerRoute} linkText={ customer.first_name + ' ' + customer.last_name} />
          <div>
            <Link to={orderEditPath}>Edit Order</Link>
          </div>

          { this.renderList() }
          { this.orderNotes('requester_notes') }
          { this.orderNotes('provider_notes') }
          <button onClick={() => this.showHideNotesForm()}>{this.state.displayNotesForm ? 'Hide' : 'Add Notes'}</button>
          { this.notesForm() }
          { this.renderArrivedButton() }
          { this.renderFulfillButton() } 
          { this.renderPrintLabels() }
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

