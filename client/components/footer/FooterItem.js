import React from 'react';
import { Link } from 'react-router-dom';

const FooterItem = props => {
  return (
    <li className="footer-item">
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
};

export default FooterItem;
