import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CustomerOrder = props => {
  const { order: { created_at, id }, i } = props;
  const dateFormat = 'MMMM DD, YYYY';
  const formatedDate = moment(created_at).format(dateFormat);

  return (
    <div key={i}>
      { i !== 0 ? <hr style={{ width: '80%', marginBottom: '20px', marginTop: '20px', marginLeft: '0' }} /> : '' }
      <li className='customer-order'>
        <p style={{ marginBottom: 0 }}>{formatedDate}</p>
        <Link to={`/orders/${id}`} className='blue-link'>
          Order #{id}
        </Link>
      </li>
    </div>
  );
}

export default CustomerOrder;
