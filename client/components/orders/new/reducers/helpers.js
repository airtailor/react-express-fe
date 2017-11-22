export function formatNewCartCustomer(customer) {
  const {id, first_name, last_name, phone, email, addresses} = customer;
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

  const newUnit = `${street_two} ${unit} ${floor}`.replace(/null/g, '').trim();

  return {
    id,
    first_name,
    last_name,
    phone,
    email,
    street,
    unit: newUnit,
    city,
    state_province,
    zip_code,
    agrees_to_terms: true,
  };
}

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
