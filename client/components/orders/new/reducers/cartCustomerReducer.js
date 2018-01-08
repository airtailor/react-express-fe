import {formatNewCartCustomer, initialState} from './helpers';
import {
  UPDATE_CART_CUSTOMER,
  RESET_CART,
  SET_CART_CUSTOMER,
  RESET_CART_CUSTOMER,
} from '../../../../utils/constants';

const cartCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_CUSTOMER:
      const customer = formatNewCartCustomer(action.customer);
      return customer;
      break;
    case UPDATE_CART_CUSTOMER:
      return {
        ...state,
        [action.customer.field]: action.customer.value,
      };
      break;
    case RESET_CART_CUSTOMER:
      return initialState;
      break;
    case RESET_CART:
      return initialState;
      break;
    default:
      return state;
  }
};

export default cartCustomerReducer;
