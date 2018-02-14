import React from 'react';
import { Link } from 'react-router-dom';
import { measurementsImage } from '../images/';

const CustomerMeasurementsLink = props => {
  return (
    <div style={{ marginTop: '30px' }}>
      <img src={measurementsImage} className="notes-image" />
      <Link
        to={`/customers/${props.customer.id}/measurements`}
        className="blue-link"
      >
        Customer Measurements
      </Link>
    </div>
  );
};

export default CustomerMeasurementsLink;
