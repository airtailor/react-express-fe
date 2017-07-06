import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { getUserStore } from '../actions';
//import '../../styles/App.css';

class Home extends Component {

  componentDidMount(){
    console.log('component did mount');
    const { currentUser, getUserStore } = this.props;
    getUserStore(currentUser.user.store_id)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderStore(){
    if (!isEmpty(this.props.currentStore)){
      return (
        <div>
          <h1>{this.props.currentStore.name}</h1>
          <p>Late Orders: { this.props.currentStore.late_orders_count }</p>
          <p>Current Orders: {this.props.currentStore.active_orders_count }</p>
        </div>
      );
    } else {
      return <h1>No store yet</h1>
    }
  }


  render(){ 
    console.log(this.props);
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
  return bindActionCreators({getUserStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
