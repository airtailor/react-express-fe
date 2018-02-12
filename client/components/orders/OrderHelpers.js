import moment from 'moment';
import { isEmpty } from 'lodash';

export const getOrderStatus = (order, roles) => {
  const {
    shipments,
    arrived,
    late,
    due_date,
    fulfilled,
    customer_alerted,
    ship_to_store,
  } = order;

  const { retailer, admin, tailor } = roles;

  let status, color;

  if (isEmpty(order.shipments)) {
    status = 'Needs Transit';
    color = 'red';
  } else if (!isEmpty(order.shipments) && !order.arrived) {
    const lastShipment = order.shipments[order.shipments.length - 1];
    const { delivery_type } = lastShipment;

    if (delivery_type === 'mail_shipment') {
      status = 'In Transit';
      color = 'gold';
    } else if (delivery_type === 'messenger_shipment') {
      const shipmentStatus = lastShipment.status;

      if (shipmentStatus === 'pending') {
        status = 'Contacting';
        color = 'red';
      } else if (shipmentStatus === 'pickup') {
        status = 'Picking Up';
        color = 'goldenrod';
      } else if (
        shipmentStatus === 'pickup_complete' ||
        shipmentStatus === 'dropoff'
      ) {
        status = 'Dropping Off';
        color = 'gold';
      } else if (shipmentStatus === 'delivered') {
        status = 'Delivered';
        color = 'green';
      }
    }
  } else if (order.late && !order.fulfilled) {
    if (admin || tailor) {
      const dueTime = formatStatusString(order.due_date, true);
      status = dueTime;
    } else if (retailer) {
      status = 'Delayed';
    }
    color = 'red';
  } else if (
    order.fulfilled &&
    !order.customer_alerted &&
    order.ship_to_store
  ) {
    status = 'In Transit';
    color = 'gold';
  } else if (order.fulfilled && order.customer_alerted && order.ship_to_store) {
    status = 'Notified';
    color = 'red';
  } else if (order.arrived && !order.fulfilled) {
    status = formatStatusString(order.due_date, false);
    const statusNum = status.split('')[0];

    if (statusNum > 3) {
      color = 'green';
    } else if (statusNum > 0) {
      color = 'gold';
    } else if (statusNum < 1) {
      color = 'red';
    }
  }
  return { status, color };
};

const formatStatusString = (dueDate, late) => {
  const todaysDate = moment(new Date());
  const momentDueDate = moment(dueDate);
  const diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
  const additionalString = late ? ' days late' : ' days to go';
  const status = (diff + additionalString).toUpperCase();
  return status;
};
