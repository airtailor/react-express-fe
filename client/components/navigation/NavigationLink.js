import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = props => {
  const { route, cssClass, text, image } = props;
  const className = `navbar-links-li ${cssClass}`;
  return (
    <li>
      <Link className={className} to={route}>
        <img src={image} alt={text} />
        {text}
      </Link>
    </li>
  );
};

export default NavigationLink;
