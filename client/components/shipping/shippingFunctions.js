import {
  SHIP_RETAILER_TO_TAILOR,
  SHIP_TAILOR_TO_RETAILER,
  SHIP_CUSTOMER_TO_TAILOR,
  SHIP_TAILOR_TO_CUSTOMER,
  SHIP_RETAILER_TO_CUSTOMER
} from '../../utils/constants';

import createShipment from '../../../actions';

export const fireShipmentCreate = (order, action, type)  => {
  data = { shipment: { action, shipment_type: type, order_id: order.id} }
  debugger
  return createShipment(data)
}

export const getMailingLabelState = (roles, order, loadingLabel) => {
  // shipment exists -> the correct shipment we are looking for
  const shipmentExists = correctShipmentExists(roles, order);
  if (shipmentExists) {
    return 'needs_label'
  } else {
    if (loadingLabel) {
      return 'in_progress'
    } else {
      return 'label_created'
    }
  }
};

export const shipmentType = (roles) => {
  const {retailer, tailor, admin, customer} = roles
  const allShipmentTypes = new Set(['mail', 'messenger'])

  if (admin || retailer) {
    return allShipmentTypes
  } else if (tailor) {
    allShipmentTypes.delete('messenger')
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
  } else if (admin ){
    if (type == "WelcomeKit") {
      return SHIP_RETAILER_TO_CUSTOMER;
    } else if (type == "TailorOrder") {
      return SHIP_RETAILER_TO_TAILOR;
    };
  };
};

const correctShipmentExists = (roles, order) => {
  const {shipments} = order;
  if (shipments.length === 0) return false;

  const shipment = shipments[shipments.length -1];
//   // make sure it's the right shipment first
  const {destination_type, source_type} = shipment;
  if (roles.admin && order.type === "WelcomeKit") {
    return true;
  } else if (destination_type === "retailer" && role.tailor) {
    return true;
  } else if (destination_type === "tailor" && role.retailer) {
    return true;
  }
  return false;
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
