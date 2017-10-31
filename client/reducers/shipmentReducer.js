import {RETAILER_TO_TAILOR, TAILOR_TO_RETAILER, CUSTOMER_TO_TAILOR, TAILOR_TO_CUSTOMER} from '../utils/constants';

const initialState = {};

const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHIP_RETAILER_TO_TAILOR:
      return {src_dest: 'retailer_tailor'};
      break;
    case SHIP_TAILOR_TO_RETAILER:
      return {src_dest: 'tailor_retailer'};
      break;
    case SHIP_CUSTOMER_TO_TAILOR:
      return {src_dest: 'customer_tailor'};
      break;
    case SHIP_TAILOR_TO_CUSTOMER:
      return {src_dest: 'tailor_customer'};
      break;
  }
};

export default shipmentReducer;
