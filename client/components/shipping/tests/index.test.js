import {
  shipmentTypes,
  shipmentActions,
  labelState,
  makeShippingLabel,
  fireShipmentCreate,
  getShipmentForRole,
} from '../shippingFunctions';

import { 
  welcomeKitWithCorrectShipmentAndCustomerIsDestination,
  welcomeKitWithCorrectShipmentAndCustomerAddressIsDestination,
} from './mocks';

describe('getShipmentForRole', () => {
  it('returns welcome kit shipment when correct shipment exists, user is admin,  and customer model is the destination', () => {
    const roles = { tailor: false, retailer: false, admin: true };
    const order = welcomeKitWithCorrectShipmentAndCustomerIsDestination;
    const shipmentExists = getShipmentForRole(roles, order);
    expect(shipmentExists.id).toBe(604);
    expect(shipmentExists).toBeTruthy();
  });

  it('returns welcome kit shipment when correct shipment exists, user is admin,  and customer address is the destination', () => {
    const roles = { tailor: false, retailer: false, admin: true };
    const order = welcomeKitWithCorrectShipmentAndCustomerAddressIsDestination;
    const shipmentExists = getShipmentForRole(roles, order);
    expect(shipmentExists.id).toBe(607);
    expect(shipmentExists).toBeTruthy();
  });
});
