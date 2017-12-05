import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    if (tailors) {
      return (
        <div className={'SelectTailor'}>
          <h3>{headerText}</h3>
          <FormSelect
            value={tailorId}
            options={tailors}
            fieldName={fieldName}
            title={title}
            onChange={onChange}
          />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTailor);
