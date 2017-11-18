import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../../images/logo.png';
import isEmpty from 'lodash/isEmpty';
import {getShipmentForRole} from '../shipping/shippingFunctions';
import {renderAlterationList} from '../../utils/alterationsLists';

class OrderComplete extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
     currentOrder: order,
     currentStore: store,
     userRoles: roles
    } = this.props;
    const {shipments} = order;

    if (order && !isEmpty(shipments)) {
      const {shipping_label: shippingLabel} = getShipmentForRole(roles, order);
      const {
        id,
        items,
        customer: {first_name: firstName}
      } = order;
      return (
        <div className="print">
          <div className="packing-slip-info">
            <img className="packing-slip-label" src={shippingLabel} />
            <br />
            <br />

            <h3>Thank you for your Air Tailor order, {firstName}</h3>
            <p>
              We hope everything arrived exactly as you expected and that you
              are pleased with our work. If you have any questions or would like
              to alter/repair more clothes using Air Tailor, please text us or
              email hello@airtailor.com. We look forward to serving you again
              soon, {firstName}!
            </p>
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
        </div>
      );
    } else {
      return <div className="print">Oops something went wrong</div>;
    }
  }
}

const mapStateToProps = store => {
  return {
    currentStore: store.currentStore,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

export default connect(mapStateToProps)(OrderComplete);
