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
  it('returns false if the current time is 10 am', () => {
    const at10am = moment().isoWeekday(1).startOf('day').hour(10);
    const availAt10am = messengerAvailable(at10am);
    expect(availAt10am).toBeFalsy();
  });

  it('returns true if the current time is 1 pm', () => {
    const at12pm = moment().weekday(1).hour(13);
    const availAt12pm = messengerAvailable(at12pm);
    expect(availAt12pm).toBeTruthy();
  });

  it('returns true if the current time is 3pm', () => {
    const at3pm = moment().weekday(1).hour(15);
    const availAt3pm = messengerAvailable(at3pm);
    expect(availAt3pm).toBeTruthy();
  });

  it('returns false if the currentTime is 6pm', () => {
    const at6pm = moment().isoWeekday(1).startOf('day').hour(18);
    const availAt6pm = messengerAvailable(at6pm);
    expect(availAt6pm).toBeFalsy();
  });

  it('returns true if it is Monday', () => {
    const monday = messengerAvailable(moment().isoWeekday(1).hour(15));
    expect(monday).toBeTruthy();
  });

  it('returns true if it is Wednesday', () => {
    const wednesday = messengerAvailable(moment().isoWeekday(3).hour(15));
    expect(wednesday).toBeTruthy();
  });

  it('returns false if it is Sunday', () => {
    const sunday = messengerAvailable(moment().isoWeekday(7).hour(15));
    expect(sunday).toBeFalsy();
  });

});
