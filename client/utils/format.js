export const formatPhone = phone => {
  return phone
    .replace(/[^\d]+/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const formatEmail = email => {
  return email.toLowerCase();
};

export const removeFalseyValuesFromObject = obj => {
  for (let k in obj) {
    if (!obj[k]) {
      delete obj[k];
    }
  }
  return obj;
};
