import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import { Redirect, Link } from 'react-router-dom';
import { getRetailerList, setLoader, removeLoader } from './ducks/actions';
import SectionHeader from '../../SectionHeader';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    retailerList: store.retailerList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setLoader, removeLoader, getRetailerList },
    dispatch
  );
};

class RetailerIndex extends Component {
  static propTypes = {
    retailerList: PropTypes.array.isRequired, // mapStateToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    getRetailerList: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    const { setLoader, removeLoader, getRetailerList } = this.props;
    setLoader();
    getRetailerList().then(() => removeLoader());
  }

  truncatedRetailerName(name) {
    // const length = 14;
    // return name.length > 20 ? `${name.substring(0, 11)}...` : name;
    return name;
  }

  renderRetailerRow = retailer => {
    const { id, name, active_orders_count: active } = retailer;

    const truncatedRetailerName = this.truncatedRetailerName(name);
    const route = `/stores/${id}/orders`;
    const editRoute = `/stores/${id}/edit`;

    return (
      <div key={id}>
        <div className="tailor-data-row">
          <Link to={route} className="tailor-link">
            <div className="tailor-data-cell">{truncatedRetailerName}</div>
            <div className="tailor-data-cell">{active}</div>
            <div className="tailor-data-cell">
              <Link to={editRoute}>Edit</Link>
            </div>
          </Link>
        </div>

        <hr className="tailor-break-row" />
      </div>
    );
  };

  renderRetailerRows = () => {
    const { retailerList } = this.props;
    if (!isEmpty(retailerList)) {
      return (
        <div className="tailor-container">
          {retailerList.map(tailor => this.renderRetailerRow(tailor))}
        </div>
      );
    } else {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Retailers...</div>
        </div>
      );
    }
  };

  renderRetailerHeaders = () => {
    return (
      <div>
        <div className="tailor-headers-container">
          <div className="tailor-headers-row">
            <h3 className="tailor-header-cell">Retailer</h3>
            <h3 className="tailor-header-cell">Assigned Orders</h3>
            <h3 className="tailor-header-cell">Edit</h3>
          </div>
          <hr className="tailor-header-break-row" />
        </div>
      </div>
    );
  };

  render() {
    const retailerOrderHeaders = this.renderRetailerHeaders;
    const retailerOrderRows = this.renderRetailerRows;
    return (
      <div>
        <SectionHeader text={'Manage Retailers'} />
        <div className="tailors">
          {retailerOrderHeaders()}
          {retailerOrderRows()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RetailerIndex);
