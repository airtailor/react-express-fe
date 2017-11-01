import {
  SHIP_RETAILER_TO_TAILOR,
  SHIP_TAILOR_TO_RETAILER,
  SHIP_CUSTOMER_TO_TAILOR,
  SHIP_TAILOR_TO_CUSTOMER,
  SHIP_RETAILER_TO_CUSTOMER
} from '../utils/constants';

const shipmentActions = (order, roles) => {
  const {ship_to_store} = order;

  if (ship_to_store && roles.tailor){
    return SHIP_TAILOR_TO_RETAILER;
  } else if (!ship_to_store && roles.tailor){
    return SHIP_TAILOR_TO_CUSTOMER;
  } else if (roles.retailer && order.type == "TailorOrder"){
    return SHIP_RETAILER_TO_TAILOR;
  } else if (roles.admin ){
    if (order.type == "WelcomeKit") {
      return SHIP_RETAILER_TO_CUSTOMER;
    } else if (order.type == "TailorOrder") {
      return SHIP_RETAILER_TO_TAILOR;
    };
  };
};

export default shipmentActions;
