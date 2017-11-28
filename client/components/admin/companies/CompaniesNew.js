import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import {} from '../../../actions';
import isEmpty from 'lodash/isEmpty';
import SectionHeader from '../../SectionHeader';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

class CompaniesNew extends Component {
  render() {
    const headerText = 'Companies / New';
    return (
      <div>
        <SectionHeader text={headerText} includeLink={false} />
        <div>HEY THERE I AM ALIVE</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesNew);
