import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGarmentToCart, setGarment } from '../../../actions';
import SelectGarment from './SelectGarment';
import SectionHeader from '../../SectionHeader';
import SelectAlterations from './SelectAlterations';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderDetails from './orderDetails';
import AgreeToTerms from '../../terms/AgreeToTerms.js';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    cart: store.cart,
    garments: store.garments.garments,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addGarmentToCart, setGarment }, dispatch);
};

class OrdersNew extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    cart: PropTypes.object.isRequired, // mapStateToProps
    garments: PropTypes.array.isRequired, // mapStateToProps
    addGarmentToCart: PropTypes.func.isRequired, // mapDispatchToProps
    setGarment: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor() {
    super();
    this.state = {
      stage: 1,
      selectedGarment: null,
      selectedAlterations: [],
      selectedGarmentIndex: null,
    };
  }

  selectGarment = garment => {
    this.setState({ selectedGarment: garment, stage: 2 });
  };

  renderStageOne = () => {
    this.setState({
      selectedGarment: null,
      selectedAlterations: [],
      stage: 1,
      selectedGarmentIndex: null,
    }); //, notes: ''});
  };

  // going to try to just pull up the garment type of the item instad of injecting the item from props

  renderSelectAlterations = (index, garment, alterations) => {
    const selectedGarment = this.props.garments.filter(
      g => g.id === garment.id
    )[0];

    this.setState({
      selectedGarment,
      selectedAlterations: alterations,
      selectedGarmentIndex: index,
      stage: 2,
    });
  };

  renderOrderDetails = () => {
    this.setState({ stage: 3 });
  };

  renderCheckout = () => {
    this.setState({ stage: 4 });
  };

  alterationsIncludeNewSelection(newSelectedAlterations, alteration) {
    for (var i = 0; i < newSelectedAlterations.length; i++) {
      if (newSelectedAlterations[i].id === alteration.id) {
        return true;
      }
    }
    return false;
  }

  addAlteration = alteration => {
    const newSelectedAlterations = this.state.selectedAlterations;
    let newList;
    if (
      !this.alterationsIncludeNewSelection(newSelectedAlterations, alteration)
    ) {
      // spread operator is needed here in order to create a copy of the array
      // that does not point to the array in redux.
      newList = [...newSelectedAlterations];
      newList.push(alteration);
    } else {
      newList = newSelectedAlterations.filter(alt => alt.id !== alteration.id);
    }
    const alts = [...newList];
    this.setState({ selectedAlterations: alts });
  };

  addToCart = () => {
    const { selectedGarment, selectedAlterations } = this.state;
    const garmentForCart = this.state.selectedGarment;
    garmentForCart.alterations = selectedAlterations;
    this.props.addGarmentToCart(garmentForCart);
    this.renderStageOne();
  };

  updateGarment = () => {
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
  };

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
            updateGarment={this.updateGarment}
            garment={this.state.selectedGarment}
          />
        );
        break;
      case 3:
        return <OrderDetails renderStageOne={this.renderStageOne} />;
        break;
      case 4:
        return (
          <Checkout
            renderStageOne={this.renderStageOne}
            renderOrderDetails={this.renderOrderDetails}
          />
        );
        break;
    }
  }

  render() {
    if (!this.props.currentStore.agrees_to_terms) {
      return <AgreeToTerms {...this.props} />;
    }

    let headerText;
    switch (this.state.stage) {
      case 1:
        headerText = 'Select New Garment';
        break;
      case 2:
        headerText = `Select ${this.state.selectedGarment.title} Alterations`;
        break;
      case 3:
        headerText = 'Enter Customer Details';
        break;
      case 4:
        headerText = 'Review and Submit';
        break;
    }
    return (
      <div>
        <SectionHeader
          text={headerText}
          rotate={'rotate'}
          link={'/'}
          showCart={true}
        />

        <div className="new-order-content">
          <div className="stage-section">
            {this.renderStage(this.state.stage)}
          </div>
          <Cart
            renderCheckout={this.renderCheckout}
            renderStageOne={this.renderStageOne}
            renderSelectAlterations={this.renderSelectAlterations}
            stage={this.state.stage}
            renderOrderDetails={this.renderOrderDetails}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersNew);
