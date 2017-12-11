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
  const { id, first_name, last_name, phone, email, addresses } = customer;
  const {
    number = '',
    street = '',
    street_two = '',
    unit = '',
    floor = '',
    city = '',
    state_province = '',
    zip_code = '',
  } = addresses[0];

  const newStreet = `${number} ${street}`.replace(/null/g, '').trim();
  const newUnit = `${street_two} ${unit} ${floor}`.replace(/null/g, '').trim();

  return {
    id,
    first_name,
    last_name,
    phone,
    email,
    street: newStreet,
    unit: newUnit,
    city,
    state_province,
    zip_code,
    agrees_to_terms: true,
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
    unit: street2,
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
  unit: '',
  city: '',
  state_province: '',
  zip_code: '',
  agrees_to_terms: true,
};
