export function formatNewCartCustomer(customer) {
  if (!customerHasAddress(customer)) {
    let newCustomerObj = updateNewFieldsForCustomer(customer);
    return removeOldAddressFieldsFromCustomer(newCustomerObj);
  } else if (customerHasAddress(customer)) {
    return formatValidAddressIntoCustomer(customer);
  } else {
    let newCustomerObj = removeOldAddressFieldsFromCustomer(customer);
    return Object.assign(newCustomerObj, blankAddress);
  }
}

const formatValidAddressIntoCustomer = customer => {
  const {
    id,
    first_name,
    last_name,
    phone,
    email,
    addresses,
    agrees_to_03_09_2018,
  } = customer;

  const {
    street = '',
    street_two = '',
    city = '',
    state_province = '',
    zip_code = '',
  } = addresses[0];

  return {
    id,
    first_name,
    last_name,
    phone,
    email,
    street,
    street_two,
    city,
    state_province,
    zip_code,
    agrees_to_03_09_2018,
  };
};

const customerHasAddress = customer => {
  const { addresses } = customer;

  if (addresses.length === 0) {
    return false;
  }

  const { street, zip_code, city, state_province } = addresses[0];

  if (addresses.length > 0 && street && zip_code && city && state_province) {
    return true;
  } else {
    return false;
  }
};

const removeOldAddressFieldsFromCustomer = customer => {
  delete customer.street1;
  delete customer.street2;
  delete customer.zip;
  delete customer.state;
  return customer;
};

const updateNewFieldsForCustomer = customer => {
  const { street1, street2, state, zip } = customer;

  return {
    ...customer,
    street: street1,
    street_two: street2,
    state_province: state,
    zip_code: zip,
  };
};

const blankAddress = {
  street: '',
  street_two: '',
  city: '',
  state_province: '',
  zip_code: '',
};

export const initialState = {
  id: '',
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  street: '',
  street_two: '',
  city: '',
  state_province: '',
  zip_code: '',
  agrees_to_03_09_2018: false,
};
