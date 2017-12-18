import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {OrderDetails} from '../';

const props = {
  updateCartCustomer: jest.fn(),
  updateCartShipTo: jest.fn(),
  renderStageOne: jest.fn(),
  cart: {
    garments: [],
    storeInfo: {},
    shipToStore: true,
    notes: '',
  },
  cartCustomer: {
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
  }
};

describe('<OrderDeails />', () => {
  it('should render correctly', () => {
    const output = shallow(<OrderDetails {...props} />);
    expect(output).toMatchSnapshot();
  });
});
