import {
  SHIP_RETAILER_TO_TAILOR,
  SHIP_TAILOR_TO_RETAILER,
  SHIP_CUSTOMER_TO_TAILOR,
  SHIP_TAILOR_TO_CUSTOMER,
  SHIP_RETAILER_TO_CUSTOMER
} from "../../utils/constants";

import { createShipment } from "../../actions";

export const fireShipmentCreate = (orders, action, type) => {
  const orderIds = orders.map(o => o.id);
  console.log("fireShipmentCreate going out")
  return createShipment({
    shipment: {
      delivery_type: type,
      order_ids: orderIds,
      shipment_action: action
    }
  });
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
  if (roles.admin && order.type === "WelcomeKit") {
    return shipments.find(s => {
      return (
        s.source.address_type === "retailer" &&
        s.destination.address_type === "customer"
      );
    });
  } else if (roles.tailor || roles.admin) {
    if (order.ship_to_store) {
      return shipments.find(s => {
        return (
          s.destination.address_type === "retailer" &&
          s.source.address_type === "tailor"
        );
      });
    } else {
      return shipments.find(s => {
        return (
          s.destination.address_type === "customer" &&
          s.source.address_type === "tailor"
        );
      });
    }
  } else if (roles.retailer) {
    return shipments.find(s => {
      return (
        s.destination.address_type === "source" &&
        s.source.address_type === "retailer"
      );
    });
  }
};

export const correctShipmentExists = (roles, order) => {
  const { shipments } = order;
  if (!shipments || shipments.length == 0) return false;
  const { source, destination } = getShipmentForRole(roles, order);
  return source && destination;
};

export const labelState = (roles, order, loadingLabel) => {
  const shipmentExists = correctShipmentExists(roles, order);
  if (!shipmentExists) {
    return "needs_label";
  } else {
    if (loadingLabel) {
      return "in_progress";
    } else {
      return "label_created";
    }
  }
};

export const messengerState = (roles, order, sendingMessenger) => {
  const shipmentExists = correctShipmentExists(roles, order);
  if (shipmentExists) {
    return "needs_delivery";
  } else {
    if (sendingMessenger) {
      return "in_progress";
    } else {
      return "package_delivered";
    }
  }
};

export const shipmentTypes = roles => {
  const { retailer, tailor, admin, customer } = roles;
  const allShipmentTypes = new Set(["mail_shipment", "messenger_shipment"]);

  if (admin || retailer) {
    return allShipmentTypes;
  } else if (tailor) {
    allShipmentTypes.delete("messenger_shipment");
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
  } else if (retailer && type == "TailorOrder") {
    return SHIP_RETAILER_TO_TAILOR;
  } else if (admin) {
    if (type == "WelcomeKit") {
      return SHIP_RETAILER_TO_CUSTOMER;
    } else if (type == "TailorOrder") {
      return SHIP_RETAILER_TO_TAILOR;
    }
  }
};
