import {
  SHIP_RETAILER_TO_TAILOR,
  SHIP_TAILOR_TO_RETAILER,
  SHIP_CUSTOMER_TO_TAILOR,
  SHIP_TAILOR_TO_CUSTOMER,
  SHIP_RETAILER_TO_CUSTOMER
} from '../../utils/constants';

import {createShipment} from '../../actions';

export const fireShipmentCreate = (orders, action, type)  => {
  const orderIds = orders.map((o) => o.id)
  return createShipment({
    shipment: {
      delivery_type: type, order_ids: orderIds, shipment_action: action
    }
  })
};

export const messengerAllowed = (action) => {
  switch(action) {
    case SHIP_RETAILER_TO_TAILOR:
      return true
    default:
      return false
  }
};

const correctShipmentExists = (roles, order) => {
  const {shipments} = order;
  if (!shipments || shipments.length == 0) return false;

  const {source, destination} = shipments[shipments.length - 1];;

  if (roles.admin && order.type === "WelcomeKit") {
    return true;
  } else if (destination.address_type === "retailer" && roles.tailor) {
    return true;
  } else if (destination.address_type === "tailor" && roles.retailer) {
    return true;
  }
  return false;
};


export const labelState = (roles, order, loadingLabel) => {
  const shipmentExists = correctShipmentExists(roles, order);
  // console.log("in labelState", roles, order, `loadingLabel: ${loadingLabel}`, shipmentExists)
  if (!shipmentExists) {
    return 'needs_label'
  } else {
    if (loadingLabel) {
      return 'in_progress'
    } else {
      return 'label_created'
    }
  }
};

export const messengerState = (roles, order, sendingMessenger) => {
  // shipment exists -> the correct shipment we are looking for
  const shipmentExists = correctShipmentExists(roles, order);
  if (shipmentExists) {
    return 'needs_delivery'
  } else {
    if (sendingMessenger) {
      return 'in_progress'
    } else {
      return 'package_delivered'
    }
  }
};

export const shipmentTypes = (roles) => {
  const {retailer, tailor, admin, customer} = roles
  const allShipmentTypes = new Set(['mail_shipment', 'messenger_shipment'])

  if (admin || retailer) {
    return allShipmentTypes
  } else if (tailor) {
    allShipmentTypes.delete('messenger_shipment')
  } else if (customer) {
    allShipmentTypes.clear()
  }

  return allShipmentTypes
}

export const shipmentActions = (order, roles) => {
  const {ship_to_store, type} = order;
  const {retailer, tailor, admin, customer} = roles

  if (ship_to_store && tailor){
    return SHIP_TAILOR_TO_RETAILER;
  } else if (!ship_to_store && tailor){
    return SHIP_TAILOR_TO_CUSTOMER;
  } else if (retailer && type == "TailorOrder"){
    return SHIP_RETAILER_TO_TAILOR;
  } else if (admin){
    if (type == "WelcomeKit") {
      return SHIP_RETAILER_TO_CUSTOMER;
    } else if (type == "TailorOrder") {
      return SHIP_RETAILER_TO_TAILOR;
    };
  };
};

// export const getShippingType = (roles, orderType) => {
//   // Tailors should only make outgoing shipments
//   // Admin should only make outgoing shipments
//   if (roles.tailor) {
//     return 'OutgoingShipment';
//   } else if (roles.admin) {
//     return 'OutgoingShipment';
//   } else if (roles.retailer && orderType !== 'WelcomeKit') {
//     return 'IncomingShipment';
//   } else if (orderType === 'WelcomeKit') {
//     return 'OutgoingShipment';
//   } else {
//     return 'IncomingShipment';
//     // if it gets here, we need to handle an error message
//     console.log('wtf fix this - ordersshow renderPrintLabels()');
//   }
// };




  // check if the label exists so it renders the correct message
  // label exists

  // make sure it's the right label.
  //
  // case - retailer sending to tailor - does the label exist for the shipment thats going to the tailor?
  // case - tailor sending to retailer OR customer - does the label exist for the shipment thats leaving the tailor?
  // caase - welcome kits - does the label exist for the shipment going to th customer


// export const makeShippingLabel = type => {
//   const data = {shipment: {type, order_id: this.props.currentOrder.id}};
//   createShipment(data)
//     .then(res => this.refreshCurrentOrder())
//     .catch(err => console.log(err));
// };

// export const renderPrintLabels = () => {
//   const {currentUser, currentOrder, userRoles} = this.props;
//   const roles = userRoles
//   const shippingType = getShippingType(role, currentOrder.type);
//
//   console.log('shippingType', shippingType, 'currentOrder', currentOrder);
//   const printPrompt = getPrintButtonPrompt(shippingType, currentOrder);
//
//   if (printPrompt.split(' ')[0] === 'Print') {
//     const url =
//       currentOrder[toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))]
//         .shipping_label;
//
//     return (
//       <div>
//         <button className="pink-button" onClick={() => window.print()}>
//           {printPrompt}
//         </button>
//
//         <OrderComplete shippingType={shippingType} />
//       </div>
//     );
//   } else if (printPrompt.split(' ')[0] === 'Create') {
//     return (
//       <button
//         className="pink-button"
//         onClick={() => this.makeShippingLabel(shippingType)}
//       >
//         {printPrompt}
//       </button>
//     );
//   }
// };
