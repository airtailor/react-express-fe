import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { getCurrentStore } from '../actions';
//import '../../styles/App.css';

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
      const storeEditPath = `/stores/${this.props.currentStore.id}/edit`;
      return (
        <div>
          <h1>{this.props.currentStore.name}</h1>
          <p>Late Orders: { this.props.currentStore.late_orders_count }</p>
          <p>Current Orders: {this.props.currentStore.active_orders_count }</p>
          <Link to={storeEditPath}>Edit Store</Link>
        </div>
      );
    } else {
      return <h1>No store yet</h1>
    }
  }


  render(){ 
    return(
      <div>
        <h3>!Home!!! { this.props.currentUser.user.email }</h3>
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
