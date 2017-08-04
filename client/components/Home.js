import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { getCurrentStore } from '../actions';
import SectionHeader from './SectionHeader';

class Home extends Component {

  componentDidMount(){
    const { currentUser, getCurrentStore } = this.props;
    getCurrentStore(currentUser.user.store_id)
    .catch(err => {
      console.log(err);
    })
  }

  renderStore(){
    if (!isEmpty(this.props.currentStore)){
      const { currentStore } = this.props;
      const { id, name, late_orders_count, active_orders_count } = currentStore;
      const storeEditPath = `/stores/${id}/edit`;

      return (
        <div>
          <h2 className='greeting'>Greetings, {name}.</h2>
          <p className='greeting'>Here's what's happening with your shop right now.</p>
        {/*  <p>Late Orders: {late_orders_count}</p>
          <p>Current Orders: {active_orders_count}</p> */}
          <Link to={storeEditPath}>Edit Store</Link>

          <div className='store-boxes'>
            <div className='late-orders orders-card'>
              <span className='late-exclamation'>!</span>
              <p> Late </p>
              <p> {late_orders_count} </p>
              <p> Orders </p>
            </div>
            <div className='current-orders orders-card'>
              <p> Current </p>
              <p> {active_orders_count} </p>
              <p> Orders </p>
            </div>
            <div className='current-orders orders-card'>
              <p> New </p>
              <p> Messages </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>No store yet</h1>
    }
  }


  render(){
    return(
      <div>
        <SectionHeader text={`Home / ${this.props.currentStore.name}`} />
        { this.renderStore() }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
