import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTailorList} from '../../../actions';
import FormSelect from '../../FormSelect';

class SelectTailor extends Component {
  componentDidMount() {
    this.props.getTailorList().catch(err => console.log(err));
  }

  render() {
    const {tailors, onChange, provider_id, handleSubmit} = this.props;
    if (tailors) {
      return (
        <div className="SelectTailor">
          <h3>Select Tailor</h3>
          <FormSelect
            value={provider_id}
            options={tailors}
            fieldName={'provider_id'}
            title={'Tailor Shop:'}
            onChange={onChange}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    tailors: store.tailorList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getTailorList}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTailor);
