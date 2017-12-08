import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

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

  static propTypes = {
    tailors: PropTypes.array.isRequired, // mapStateToProps
    getTailorList: PropTypes.func.isRequired, // mapDispatchToProps
    onChange: PropTypes.func.isRequired, // parentComponent
    provider_id: PropTypes.string, // parentComponent
  };

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
