import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStoreList } from '../../actions';
import FormSelect from '../FormSelect';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    stores: store.storeList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getStoreList }, dispatch);
};

class SelectStore extends Component {
  static propTypes = {
    stores: PropTypes.array.isRequired, // mapStateToProps
    getStoreList: PropTypes.func.isRequired, // mapDispatchToProps
    onChange: PropTypes.func.isRequired, // parentComponent
    storeId: PropTypes.string, // parentComponent
  };

  componentDidMount() {
    const { getStoreList } = this.props;
    getStoreList().catch(err => console.log(err));
  }

  render() {
    const { stores, onChange, storeId } = this.props;
    if (stores) {
      return (
        <div className="SelectStore">
          <h3>Select Store</h3>
          <FormSelect
            value={storeId}
            options={stores}
            fieldName={'storeId'}
            title={'Store:'}
            onChange={onChange}
          />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectStore);
