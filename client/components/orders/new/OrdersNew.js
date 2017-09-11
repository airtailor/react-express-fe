import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addGarmentToCart} from '../../../actions';
import SelectGarment from './SelectGarment';
import SectionHeader from '../../SectionHeader';
import SelectAlterations from './SelectAlterations';
import Cart from './Cart';
import OrderDetails from './OrderDetails';
import Intercom from 'react-intercom';

class OrdersNew extends Component {
  constructor(){
    super();
    this.state = {
      stage: 1,
      selectedGarment: null,
      selectedAlterations: []
    }

    this.selectGarment = this.selectGarment.bind(this);
    this.renderStageOne = this.renderStageOne.bind(this);
    this.addAlteration = this.addAlteration.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.renderOrderDetails = this.renderOrderDetails.bind(this);
  }

  selectGarment(garment){
    this.setState({selectedGarment: garment, stage: 2});
  }

  renderStageOne(){
    this.setState({selectedGarment: null, selectedAlterations: [], stage: 1})//, notes: ''});
  }

  renderOrderDetails(){
    this.setState({stage: 3});
  }

  addAlteration(alteration){
    let newSelectedAlterations = this.state.selectedAlterations;
    if (!newSelectedAlterations.includes(alteration)) {
      newSelectedAlterations.push(alteration);
    } else {
      newSelectedAlterations = newSelectedAlterations.filter(alt => alt.id !== alteration.id);
    }
    this.setState({selectedAlterations: newSelectedAlterations});
  }

  addToCart(){
    const {selectedGarment, selectedAlterations} = this.state;
    const garmentForCart = this.state.selectedGarment;
    garmentForCart.alterations = selectedAlterations;
    this.props.addGarmentToCart(garmentForCart);
    this.renderStageOne();
  }

  renderStage(stage){
    switch (this.state.stage) {
      case 1:
        return <SelectGarment
                 handleSelect={this.selectGarment}
                 garments={this.props.garments} />
        break;
      case 2:
        return <SelectAlterations
                 addToCart={this.addToCart}
                 handleSelect={this.addAlteration}
                 renderOrderDetails={this.renderOrderDetails}
                 selectedAlterations={this.state.selectedAlterations.map(alt => alt.id)}
                 renderStageOne={this.renderStageOne}
                 garment={this.state.selectedGarment} />
        break;
      case 3:
        return <OrderDetails />
        break;
    }
  }

  render(){
    const { currentUser } = this.props;

    const user = {
      user_id: currentUser.user.id,
      email: currentUser.user.email,
      name: currentUser.user.email
    };

    return (
      <div>
        <SectionHeader
          text='New Order'
          rotate={'rotate'}
          link={'/'}
          showCart={true} />

        <div className='new-order-content'>
          <div className='stage-section'>
            {this.renderStage(this.state.stage)}
          </div>
          <Cart stage={this.state.stage} renderOrderDetails={this.renderOrderDetails} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    garments: store.garments.garments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addGarmentToCart}, dispatch);
}

// app id
// j5szofcq
export default connect(mapStateToProps, mapDispatchToProps)(OrdersNew);
