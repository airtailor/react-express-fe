import moment from 'moment'

import {
  shipmentTypes,
  shipmentActions,
  labelState,
  makeShippingLabel,
  fireShipmentCreate,
  getShipmentForRole,
  messengerAvailable,
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

describe('messengerAvailable', () => {
  it('returns true if the currentTime is between 12pm and 5pm', () => {
    const at10am= moment().startOf('day').hour(10);
    const availAt10am = messengerAvailable(at10am);
    expect(availAt10am).toBeFalsy();

    const at12pm= moment().startOf('day').hour(12).minute(1);
    const availAt12pm= messengerAvailable(at12pm);
    expect(availAt12pm).toBeTruthy();

    const at3pm= moment().startOf('day').hour(15);
    const availAt3pm= messengerAvailable(at3pm);
    expect(availAt3pm).toBeTruthy();

    const at6pm= moment().startOf('day').hour(18);
    const availAt6pm= messengerAvailable(at6pm);
    expect(availAt6pm).toBeFalsy();
  });
});
