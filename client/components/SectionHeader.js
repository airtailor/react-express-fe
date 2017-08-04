import React from 'react';
import { Link } from 'react-router-dom';


const CustomerLink = (props) => {
  const { linkTo, linkText } = props;
  if (linkTo && linkText) {
    return (
      <Link to={props.linkTo}>
        {props.linkText}
      </Link>
    );
  }
}

const SectionHeader = (props) => {
  return (
    <div className='section-header'>

      <h2>{props.text}</h2>
      {CustomerLink(props)}
    </div>
  );
}

export default SectionHeader;
