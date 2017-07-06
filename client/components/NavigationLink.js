import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = (props) => {
  const { route, cssClass, text } = props;
  return (
    <li>
      <Link className={`navbar-links-li ${cssClass}`} to={route}>
        {text}
      </Link>
    </li>
  );
}

export default NavigationLink;
