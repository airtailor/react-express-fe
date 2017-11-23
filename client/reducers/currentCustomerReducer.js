import {
  SET_CURRENT_CUSTOMER,
  UPDATE_CURRENT_CUSTOMER,
} from '../utils/constants';
import {
  formatNewCartCustomer,
  initialState,
} from '../components/orders/new/reducers/helpers';

const currentCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CUSTOMER:
      const customer = formatNewCartCustomer(action.customer);
      return customer;
      break;
    case UPDATE_CURRENT_CUSTOMER:
      return {
        ...state,
        [action.customer.field]: action.customer.value,
      };
      break;
    default:
      return state;
  }
};

export default currentCustomerReducer;
