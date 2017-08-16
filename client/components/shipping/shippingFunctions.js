export const getPrintButtonPrompt = (shippingType, order) =>{
  const verb = labelExists(shippingType, order) ?
    'Print' :
    'Create';
  return `${verb} Shipping Label`
}

export const getShippingType = (role, orderType) =>{
  // Tailors should only make outgoing shipments
  // Admin should only make outgoing shipments
  if (role === 'tailor'){
    return 'OutgoingShipment';
  } else if (role === 'admin'){
      return 'OutgoingShipment';
  } else if (role === 'sales_associate' && orderType !== 'WelcomeKit'){
    return 'IncomingShipment';
  } else if (orderType === 'WelcomeKit'){
    return 'OutgoingShipment';
  } else {
    return 'IncomingShipment';
    // if it gets here, we need to handle an error message
    console.log('wtf fix this - ordersshow renderPrintLabels()');
  }
}

export const toSnakeCaseFromCamelCase = (string) => {
 return string.replace(/([A-Z])/g, letter => {
   return `_${letter.toLowerCase()}`;
 });
}

export const lowerCaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const labelExists = (shippingType, order) => {
  const key = toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType));
  if (order[key]){
    return order[key].shipping_label ? true : false
  }
  return false;
}
