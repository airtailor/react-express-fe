import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addGarmentToCart, setGarment} from '../../../actions';
import SelectGarment from './SelectGarment';
import SectionHeader from '../../SectionHeader';
import SelectAlterations from './SelectAlterations';
import Cart from './Cart';
import OrderDetails from './OrderDetails';
import Intercom from 'react-intercom';

class OrdersNew extends Component {
  constructor() {
    super();
    this.state = {
      stage: 1,
      selectedGarment: null,
      selectedAlterations: [],
      selectedGarmentIndex: null,
    };

    this.selectGarment = this.selectGarment.bind(this);
    this.renderStageOne = this.renderStageOne.bind(this);
    this.addAlteration = this.addAlteration.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.renderOrderDetails = this.renderOrderDetails.bind(this);
    this.renderSelectAlerations = this.renderSelectAlterations.bind(this);
  }

  selectGarment(garment) {
    this.setState({selectedGarment: garment, stage: 2});
  }

  renderStageOne() {
    this.setState({
      selectedGarment: null,
      selectedAlterations: [],
      stage: 1,
      selectedGarmentIndex: null,
    }); //, notes: ''});
  }

  // going to try to just pull up the garment type of the item instad of injecting the item from props

  renderSelectAlterations(index, garment, alterations) {
    const selectedGarment = this.props.garments.filter(
      g => g.id === garment.id
    )[0];

    this.setState({
      selectedGarment,
      selectedAlterations: alterations,
      selectedGarmentIndex: index,
      stage: 2,
    });
  }

  // renderSelectAlterations(index, garment, alterations) {
  //   debugger;
  //   console.log('cart here', this.props.cart.garments);
  //   delete garment.alterations;
  //
  //   console.log('renderSelectAlterations', garment);
  //   console.log('cart here', this.props.cart.garments);
  //   this.setState({
  //     selectedGarment: garment,
  //     selectedAlterations: alterations,
  //     selectedGarmentIndex: index,
  //     stage: 2,
  //   });
  // }

  renderOrderDetails() {
    this.setState({stage: 3});
  }

  alterationsIncludeNewSelection(newSelectedAlterations, alteration) {
    for (var i = 0; i < newSelectedAlterations.length; i++) {
      if (newSelectedAlterations[i] === alteration) {
        return true;
      }
    }
    return false;
  }

  addAlteration(alteration) {
    console.log('addAlteration');
    const newSelectedAlterations = this.state.selectedAlterations;
    let newList;
    if (
      !this.alterationsIncludeNewSelection(newSelectedAlterations, alteration)
    ) {
      newList = newSelectedAlterations;
      newList.push(alteration);
    } else {
      newList = newSelectedAlterations.filter(alt => alt.id !== alteration.id);
    }
    this.setState({selectedAlterations: newList});
  }

  addToCart() {
    const {selectedGarment, selectedAlterations} = this.state;
    const garmentForCart = this.state.selectedGarment;
    garmentForCart.alterations = selectedAlterations;
    this.props.addGarmentToCart(garmentForCart);
    this.renderStageOne();
  }

  updateGarment() {
    const {
      selectedGarment,
      selectedGarmentIndex,
      selectedAlterations,
    } = this.state;
    const garmentForCart = this.state.selectedGarment;
    garmentForCart.alterations = selectedAlterations;
    this.props.setGarment(garmentForCart, selectedGarmentIndex);
    this.setState({
      stage: 1,
      selectedGarmentIndex: null,
      selectedGarment: null,
      selectedAlterations: [],
    });
  }

  renderStage(stage) {
    switch (this.state.stage) {
      case 1:
        return (
          <SelectGarment
            handleSelect={this.selectGarment}
            garments={this.props.garments}
          />
        );
        break;
      case 2:
        return (
          <SelectAlterations
            addToCart={this.addToCart}
            handleSelect={this.addAlteration}
            renderOrderDetails={this.renderOrderDetails}
            selectedAlterations={this.state.selectedAlterations.map(
              alt => alt.id
            )}
            renderStageOne={this.renderStageOne}
            garmentIndex={this.state.selectedGarmentIndex}
            updateGarment={this.updateGarment.bind(this)}
            garment={this.state.selectedGarment}
          />
        );
        break;
      case 3:
        return <OrderDetails />;
        break;
      case 4:
        return <OrderConfirmation />;
        break;
    }
  }

  render() {
    console.log('garments', this.props.cart.garments.length);
    if (this.props.cart.garments.length > 0) {
      console.log(
        'alterations',
        this.props.cart.garments[this.props.cart.garments.length - 1]
          .alterations.length
      );
    }

    return (
      <div>
        <SectionHeader
          text="New Order"
          rotate={'rotate'}
          link={'/'}
          showCart={true}
        />

        <div className="new-order-content">
          <div className="stage-section">
            {this.renderStage(this.state.stage)}
          </div>
          <Cart
            renderSelectAlterations={this.renderSelectAlterations.bind(this)}
            stage={this.state.stage}
            renderOrderDetails={this.renderOrderDetails}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    cart: store.cart,
    garments: store.garments.garments,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addGarmentToCart, setGarment}, dispatch);
};

// app id
// j5szofcq
export default connect(mapStateToProps, mapDispatchToProps)(OrdersNew);
