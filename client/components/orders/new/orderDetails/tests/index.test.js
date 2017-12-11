import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { OrderDetails } from '../';

const props = {
  updateCartCustomerInfo: jest.fn(),
  updateCartShipTo: jest.fn(),
  renderStageOne: jest.fn(),
  cart: {
    garments: [],
    customerInfo: {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      street: '',
      street_two: '',
      city: '',
      state_province: '',
      zip_code: '',
      agrees_to_terms: true,
    },
    storeInfo: {},
    shipToStore: true,
    notes: '',
  },
};

describe('<OrderDeails />', () => {
  it('should render correctly', () => {
    const output = shallow(<OrderDetails {...props} />);
    expect(output).toMatchSnapshot();
  });
});
