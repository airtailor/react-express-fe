import {
  SHIP_RETAILER_TO_TAILOR,
  SHIP_TAILOR_TO_RETAILER,
  SHIP_CUSTOMER_TO_TAILOR,
  SHIP_TAILOR_TO_CUSTOMER,
  SHIP_RETAILER_TO_CUSTOMER,
} from '../../utils/constants';

import { createShipment } from '../../actions';

export const fireShipmentCreate = (orders, action, type) => {
  const orderIds = orders.map(o => o.id);
  return createShipment({
    shipment: {
      delivery_type: type,
      order_ids: orderIds,
      shipment_action: action,
    },
  });
};

// this function is being used to wait until after a shipping_label
// is fully loaded before calling window.print()
// HOW TO TEST???
export const imageLoader = (image, callback) => {
  const ImageLoader = new Image();
  ImageLoader.onload = () => callback();
  ImageLoader.src = image;
};

export const waitingForPostmatesUpdate = orders => {
  const ordersNeedUpdates = orders.filter(order => {
    if (order.shipments.length > 0) {
      const lastShipment = order.shipments[order.shipments.length - 1];
      const messengerShipment =
        lastShipment.delivery_type === 'messenger_shipment';
      const delivered = lastShipment.status === 'delivered';

      return messengerShipment && !delivered;
    }
    return false;
  });

  return ordersNeedUpdates.length > 0;
};

const messengerTime = now => {
  const startTime = now
    .clone()
    .startOf('day')
    .hour(12);
  const endTime = now
    .clone()
    .startOf('day')
    .hour(17);
  const avail = now.isBetween(startTime, endTime);
  return true; //return avail;
};

const isNotSunday = now => {
  return now.day() != 0;
};

export const messengerAvailable = now => {
  return isNotSunday(now) && messengerTime(now);
};

export const messengerAllowed = (action, roles) => {
  const { admin, retailer } = roles;

  switch (action) {
    case SHIP_RETAILER_TO_TAILOR:
      if (admin || retailer) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
};

export const getShipmentForRole = (roles, order) => {
  const { shipments } = order;
  if (roles.admin && order.type === 'WelcomeKit') {
    return shipments.find(s => {
      const {
        source: { address_type: sourceAddressType },
        destination: {
          address_type: destinationAddressType,
          first_name,
          last_name,
        },
      } = s;

      // return shipment if both
      // 1. the source is a retailers address
      // 2. the destination is either a customer or a customer's address

      return (
        sourceAddressType === 'retailer' &&
        (destinationAddressType === 'customer' || (first_name && last_name))
      );
    });
  } else if (roles.tailor || roles.admin) {
    if (order.ship_to_store) {
      return shipments.find(s => {
        return (
          s.destination.address_type === 'retailer' &&
          s.source.address_type === 'tailor'
        );
      });
    } else {
      return shipments.find(s => {
        const { destination_type } = s;
        const { address_type, street1, zip, first_name } = s.destination;

        // if address's destination_type is 'customer'
        // or if this is a customer with a first name, street1, and street2
        const addressFieldsExist =
          address_type === 'customer' || destination_type === 'Customer';
        const customerFieldsExist = street1 && zip && first_name;
        const srcAddyIsTailor = s.source.address_type === 'tailor';

        return (addressFieldsExist || customerFieldsExist) && srcAddyIsTailor;
      });
    }
  } else if (roles.retailer) {
    return shipments.find(s => {
      return (
        s.destination.address_type === 'source' &&
        s.source.address_type === 'retailer'
      );
    });
  }
};

export const correctShipmentExists = (roles, order) => {
  const { shipments } = order;
  if (!shipments || shipments.length == 0) return false;
  const correctShipment = getShipmentForRole(roles, order);
  return correctShipment; // either an object, or undefined
};

export const labelState = (roles, order, loadingLabel) => {
  const shipmentExists = correctShipmentExists(roles, order);
  if (!shipmentExists) {
    return 'needs_label';
  } else {
    if (loadingLabel) {
      return 'in_progress';
    } else {
      return 'label_created';
    }
  }
};

export const messengerState = (roles, order, sendingMessenger) => {
  const shipmentExists = correctShipmentExists(roles, order);
  if (shipmentExists) {
    return 'needs_delivery';
  } else {
    if (sendingMessenger) {
      return 'in_progress';
    } else {
      return 'package_delivered';
    }
  }
};

export const shipmentTypes = roles => {
  const { retailer, tailor, admin, customer } = roles;
  const allShipmentTypes = new Set(['mail_shipment', 'messenger_shipment']);

  if (admin || retailer) {
    return allShipmentTypes;
  } else if (tailor) {
    allShipmentTypes.delete('messenger_shipment');
  } else if (customer) {
    allShipmentTypes.clear();
  }

  return allShipmentTypes;
};

export const shipmentActions = (order, roles) => {
  const { ship_to_store, type } = order;
  const { retailer, tailor, admin, customer } = roles;

  if (ship_to_store && tailor) {
    return SHIP_TAILOR_TO_RETAILER;
  } else if (!ship_to_store && tailor) {
    return SHIP_TAILOR_TO_CUSTOMER;
  } else if (retailer && type == 'TailorOrder') {
    return SHIP_RETAILER_TO_TAILOR;
  } else if (admin) {
    if (type == 'WelcomeKit') {
      return SHIP_RETAILER_TO_CUSTOMER;
    } else if (type == 'TailorOrder') {
      return SHIP_RETAILER_TO_TAILOR;
    }
  }
};
