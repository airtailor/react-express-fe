import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../../Button';
import ShippingOptions from './ShippingOptions';
import OrderComplete from '../../../prints/OrderComplete';

import { shipmentActions } from '../../../shipping/shippingFunctions';
import { createShipment, setLoader, removeLoader } from '../../../../actions';

const mapStateToProps = store => {
  return {
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

class SendOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
    };
  }

  hideShow = () => {
    const bool = !this.state.showOptions;
    this.setState({ showOptions: bool });
  };

  handleSubmit = selection => {
    const { selectedOrders } = this.props;
    const { setLoader, removeLoader, userRoles } = this.props;
    const order_ids = [...selectedOrders].map(order => order.id);

    setLoader();
    const shipment_action = shipmentActions([...selectedOrders][0], userRoles);

    createShipment({
      shipment: { delivery_type: selection, order_ids, shipment_action },
    }).then(res => {
      removeLoader();
      selection === 'mail_shipment'
        ? this.props.handleBulkMailRes(res)
        : this.props.handleMessengerRes(res);
    });
  };

  noSelectedOrders = selectedOrders => {
    return selectedOrders.length === 0;
  };

  componentWillReceiveProps(nextProps) {
    const noSelectedOrders = this.noSelectedOrders(nextProps.selectedOrders);
    const showOptionsVisible = this.state.showOptions;

    if (noSelectedOrders && showOptionsVisible) {
      this.hideShow();
      this.props.refreshStoreOrders();
    }
  }

  render() {
    const { showOptions } = this.state;
    const { selectedOrders, selectedOrderShipments } = this.props;
    const disabled = this.noSelectedOrders(selectedOrders);

    if (showOptions) {
      return (
        <div className="shipping-option-container">
          <ShippingOptions
            handleSubmit={this.handleSubmit}
            hideShow={this.hideShow}
          />
          <OrderComplete shipmentSet={selectedOrderShipments} />
        </div>
      );
    } else {
      return (
        <div className="shipping-option-container">
          <Button
            className="send-order-button"
            onClick={this.hideShow}
            disabled={disabled}
            text="SEND ORDER"
          />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendOrder);
