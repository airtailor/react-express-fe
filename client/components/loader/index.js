import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

const mapStateToProps = store => {
  return {
    loader: store.loader,
  };
};

const Loader = props => {
  if (!isEmpty(props.loader)) {
    return <div className="loader" />;
  }
  return <div className="empty-div" />;
};

export default connect(mapStateToProps)(Loader);
