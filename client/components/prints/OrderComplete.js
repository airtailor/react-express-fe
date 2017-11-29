import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/logo.png';
import isEmpty from 'lodash/isEmpty';
import { getShipmentForRole } from '../shipping/shippingFunctions';
import { renderAlterationList } from '../../utils/alterationsLists';

class OrderComplete extends Component {
  constructor(props) {
    super();

    this.renderBulkShippingLabels = this.renderBulkShippingLabels.bind(this);
    this.renderShippingLabel = this.renderShippingLabel.bind(this);
  }

  renderShippingLabelImage(shippingLabel) {
    return (
      <img
        className="packing-slip-label"
        alt="Shipping Label"
        src={shippingLabel}
      />
    );
  }

  renderOrderText(order) {
    const { id, items, customer: { first_name: firstName } } = order;
    return (
      <div>
        <h3>Thank you for your Air Tailor order, {firstName}</h3>
        <p>
          We hope everything arrived exactly as you expected and that you are
          pleased with our work. If you have any questions or would like to
          alter/repair more clothes using Air Tailor, please text us or email
          hello@airtailor.com. We look forward to serving you again soon,{' '}
          {firstName}!
        </p>
      </div>
    );
  }

  renderOrderItems(order) {
    const { id, items } = order;
    return (
      <div>
        <p className="packing-slip-info-orderid">
          <b>Order: #{id}</b>
        </p>
        {renderAlterationList(items, 'print-alteration')}
        <img
          className="packing-slip-info-img"
          src={logo}
          alt="air tailor logo"
          id="logo"
        />
      </div>
    );
  }

  renderBulkShippingOrderItems(order) {
    const { id, items } = order;
    return (
      <div>
        <p className="packing-slip-info-orderid">
          <b>Order: #{id}</b>
        </p>
        {renderAlterationList(items, 'print-alteration')}
      </div>
    );
  }

  // renderBulkShippingLabels(shipmentSet) {
  //   if (!isEmpty(shipmentSet)) {
  //     return shipmentSet.map(shipment => {
  //       return shipment.orders.map(o => {
  //         const render = this.renderShippingLabel;
  //         return render(o, shipment);
  //       });
  //     });
  //   }
  // }

  renderBulkShippingOrderContent(orders) {
    const label = this.renderShippingLabelImage;
    const text = this.renderOrderText;
    const items = this.renderBulkShippingOrderItems;

    return orders.map((order, i) => {
      return (
        <div key={i} className="packing-slip-info">
          {items(order)}
        </div>
      );
    });
  }

  renderBulkShippingLabels(shipmentSet) {
    const shipment = shipmentSet[0];
    const { orders } = shipment;
    const { userRoles: roles } = this.props;
    const labelShipment = shipment || getShipmentForRole(roles, order);
    const { shipping_label: shippingLabel } = labelShipment;

    const ordersContent = this.renderBulkShippingOrderContent(orders);
    const label = this.renderShippingLabelImage(shippingLabel);
    if (!isEmpty(shipmentSet)) {
      return (
        <div>
          <div className="packing-slip-info">{label}</div>
          <br />
          <br />
          <br />
          {ordersContent}
          <hr />
          <img
            className="packing-slip-info-img"
            src={logo}
            alt="air tailor logo"
            id="logo"
          />
        </div>
      );
    }
  }

  renderShippingLabel(order, shipment) {
    const { userRoles: roles } = this.props;
    const labelShipment = shipment || getShipmentForRole(roles, order);
    const { shipping_label: shippingLabel } = labelShipment;

    const label = this.renderShippingLabelImage;
    const text = this.renderOrderText;
    const items = this.renderOrderItems;

    return (
      <div className="packing-slip-info">
        {label(shippingLabel)}
        <br />
        <br />
        {text(order)}
        {items(order)}
      </div>
    );
  }

  render() {
    const { currentOrder: order, shipmentSet } = this.props;
    if (shipmentSet || order) {
      let labelFunction, labelObj;
      if (shipmentSet) {
        labelFunction = this.renderBulkShippingLabels;
        labelObj = shipmentSet;
      } else if (order && !isEmpty(order.shipments)) {
        labelFunction = this.renderShippingLabel;
        labelObj = order;
      } else {
        return <div className="print">Oops something went wrong</div>;
      }
      return <div className="print">{labelFunction(labelObj)}</div>;
    } else {
      return <div className="print">Oops something went wrong</div>;
    }
  }
}

const mapStateToProps = store => {
  return {
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

export default connect(mapStateToProps)(OrderComplete);
