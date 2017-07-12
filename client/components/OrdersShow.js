import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getCurrentOrder, getItemTypes, updateOrderNotes } from '../actions';
import isEmpty from 'lodash/isEmpty';

class OrdersShow extends Component {
  constructor(){
    super();
    this.state = { 
      notes: '',
      displayNotesForm: false
    }
  }
 
  componentDidMount(){
    const { order_id } = this.props.match.params;
    const store_id = this.props.currentStore.id;
    const { getCurrentOrder, getItemTypes } = this.props;
    getItemTypes()
      .then(getCurrentOrder(store_id, order_id).catch(err => console.log(err)))
      .catch(err => console.log(err));
  }


  filterByItemType(item, type){
    return item.item_type.name == type.name;
  }

  sortItemsByType(){
    const { itemTypes } = this.props;
    const { items } = this.props.currentOrder;
    return itemTypes.reduce((newList, type)=> {

      const filteredItems = items.filter(item => {
        return item.item_type.name == type.name;
      });

      if (filteredItems.length > 0){
        const newValue = { name: type.name, filteredItems };
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
    const title = party_notes === 'provider_notes' ? 'Order Notes' : 'Tailor Notes';
    return (
      <div>
        <h3> { title } </h3>
        <p>{ notes } </p>
      </div>
    );
  }

  updateNotes(notes){
    this.setState({notes});
  }

  submitNotes(event){
    event.preventDefault();
    this.props.updateOrderNotes(this.props.currentOrder, this.state.notes, this.props.currentUser.user.roles[0].name, this.props.currentStore)
      .then(res => console.log(res))
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
              value={this.state.notes}
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

  showHideNotesForm(){
    const value = !this.state.displayNotesForm;
    this.setState({ displayNotesForm: value });
  }

  render(){
    const { currentStore, currentOrder, itemTypes } = this.props;
    const { customer } = currentOrder;
    if (!isEmpty(currentOrder) && !isEmpty(itemTypes)){
      const customerRoute = `/customers/${customer.id}/edit`;
      return (
        <div>
          <div>
            <h2>Orders / <Link to='/orders'>{ currentStore.name }</Link> / #{currentOrder.id} </h2>
            <Link to={customerRoute} >
              { customer.first_name } { customer.last_name + ' '}
            </Link>
            / 
            <Link to="#"> delete order</Link>
          </div>

          { this.renderList() }
          { this.orderNotes('requester_notes') }
          { this.orderNotes('provider_notes') }
          <button onClick={() => this.showHideNotesForm()}>Add Notes?</button>
          { this.notesForm() }

        </div>
      );
    } else {
    return <div>Loading..</div>
    }
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    currentOrder: store.currentOrder,
    itemTypes: store.itemTypes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentOrder, getItemTypes, updateOrderNotes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersShow);
