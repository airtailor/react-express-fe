import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTailorList } from '../../../actions';
import FormSelect from '../../FormSelect';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    tailors: store.tailorList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTailorList }, dispatch);
};

class SelectTailor extends Component {
  static propTypes = {
    tailors: PropTypes.array.isRequired, // mapStateToProps
    getTailorList: PropTypes.func.isRequired, // mapDispatchToProps
    onChange: PropTypes.func.isRequired, // parentComponent
    provider_id: PropTypes.string, // parentComponent
  };

  componentDidMount() {
    this.props.getTailorList().catch(err => console.log(err));
  }

  render() {
    const { tailors, onChange, provider_id } = this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectTailor);
