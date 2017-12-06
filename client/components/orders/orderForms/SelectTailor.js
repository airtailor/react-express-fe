import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';

import { getTailorList } from '../../../actions';

import FormSelect from '../../FormSelect';

const mapStateToProps = store => {
  return {
    tailors: store.tailorList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTailorList }, dispatch);
};

class SelectTailor extends Component {
  componentDidMount() {
    this.props.getTailorList().catch(err => console.log(err));
  }

  render() {
    const {
      tailors,
      onChange,
      tailorId,
      handleSubmit,
      fieldName = 'provider_id',
      title = 'Tailor Shop:',
      headerText = 'Select Tailor',
    } = this.props;

    if (isEmpty(tailors)) {
      return <div />;
    }

    console.log('tailorId', tailorId);

    return (
      <div className={'SelectTailor'}>
        <h3>{headerText}</h3>
        <FormSelect
          value={tailorId}
          options={tailors}
          fieldName={'provider_id'}
          title={title}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTailor);
