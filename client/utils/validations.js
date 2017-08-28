export const ValidateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const ValidatePhone = (phone) => {
  if (phone){
    return phone.match(/\d/g).length===10;
  }
}

export const ValidateZip = (zip) => {
  const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  return re.test(zip);
}

export const ValidatePassword = (password) => {
  return password.length > 6;
}

export const ValidatePasswordConfirmation = (password, passwordConfirmation) => {
  return password === passwordConfirmation;
}
