export const getPrintButtonPrompt = (shippingType, order, loadingLabel) => {
  let verb;
  const label = labelExists(shippingType, order);
  if (label) {
    verb = 'Print';
  } else {
    if (loadingLabel) {
      verb = 'Creating';
    } else {
      verb = 'Create';
    }
  }
  // const verb = labelExists(shippingType, order) ?
  //   'Print' :
  //   'Create';
  // return `${verb} Shipping Label`
  return `${verb} Shipping Label`;
};

export const getShippingType = (role, orderType) => {
  // Tailors should only make outgoing shipments
  // Admin should only make outgoing shipments
  if (role === 'tailor') {
    return 'OutgoingShipment';
  } else if (role === 'admin') {
    return 'OutgoingShipment';
  } else if (role === 'sales_associate' && orderType !== 'WelcomeKit') {
    return 'IncomingShipment';
  } else if (orderType === 'WelcomeKit') {
    return 'OutgoingShipment';
  } else {
    return 'IncomingShipment';
    // if it gets here, we need to handle an error message
    console.log('wtf fix this - ordersshow renderPrintLabels()');
  }
};

export const toSnakeCaseFromCamelCase = string => {
  return string.replace(/([A-Z])/g, letter => {
    return `_${letter.toLowerCase()}`;
  });
};

export const lowerCaseFirstLetter = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

const labelExists = (shippingType, order) => {
  const key = toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType));
  if (order[key]) {
    return order[key].shipping_label ? true : false;
  }
  return false;
};

export const makeShippingLabel = type => {
  const data = {shipment: {type, order_id: this.props.currentOrder.id}};
  createShipment(data)
    .then(res => this.refreshCurrentOrder())
    .catch(err => console.log(err));
};

export const renderPrintLabels = () => {
  const {currentUser, currentOrder} = this.props;
  const role = currentUser.user.roles[0].name;
  const shippingType = getShippingType(role, currentOrder.type);

  console.log('shippingType', shippingType, 'currentOrder', currentOrder);
  const printPrompt = getPrintButtonPrompt(shippingType, currentOrder);

  if (printPrompt.split(' ')[0] === 'Print') {
    const url =
      currentOrder[toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))]
        .shipping_label;

    return (
      <div>
        <button className="pink-button" onClick={() => window.print()}>
          {printPrompt}
        </button>

        <OrderComplete shippingType={shippingType} />
        {/* <OrderComplete order={currentOrder} shippingType={shippingType} /> */}
      </div>
    );
  } else if (printPrompt.split(' ')[0] === 'Create') {
    return (
      <button
        className="pink-button"
        onClick={() => this.makeShippingLabel(shippingType)}
      >
        {printPrompt}
      </button>
    );
  }
};
