import React from 'react';
import { Link } from 'react-router-dom';

const CustomerMeasurementsLink = props => {
  return (
    <div style={{ marginTop: '30px' }}>
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
