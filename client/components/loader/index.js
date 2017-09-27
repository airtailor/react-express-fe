import React from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import './loader.scss';

const Loader = props => {
  if (!isEmpty(props.loader)) {
    return <div className="loader" />;
  }
  return <div className="empty-div" />;
};

const mapStateToProps = store => {
  return {
    loader: store.loader,
  };
};

export default connect(mapStateToProps)(Loader);
