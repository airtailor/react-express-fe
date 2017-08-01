import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const LogoMessage = (props) => {
  return (
    <div className={props.className}>
      <Link to="/" className={props.className}>
        <img className='logo' src={Logo} />
      </Link>
      <h5>{props.text}</h5>
    </div>
  );
};

export default LogoMessage;
