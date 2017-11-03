import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {Redirect, Link} from 'react-router-dom';
import {getTailorList, setLoader, removeLoader} from '../../../actions';
import SectionHeader from '../../SectionHeader';

class TailorsIndex extends Component {
  componentDidMount() {
    const {setLoader, removeLoader, getTailorList} = this.props;
    setLoader();
    getTailorList().then(() => removeLoader());
  }

  truncatedTailorName(name) {
    const length = 14;
    return name.length > 14 ? `${name.substring(0, 11)}...` : name;
  }

  renderTailorRows() {
    const {tailorList} = this.props;
    return tailorList.map(tailor => {
      const {
        id,
        name,
        active_orders_count: assigned,
        arrived_orders_count: arrived,
        late_orders_count: late,
      } = tailor;

      const truncatedTailorName = this.truncatedTailorName(name);
      const route = `/stores/${id}/orders`;

      return (
        <div key={id}>
          <div className="order-row">
            <Link to={route} className="flex-container">
              <div className="order-data">{truncatedTailorName}</div>
              <div className="order-data">{assigned}</div>
              <div className="order-data">{arrived}</div>
              <div className="order-data" style={{color: 'red'}}>
                {late}
              </div>
            </Link>
          </div>
          <hr className="order-row-hr" />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <SectionHeader text={'Manage Tailors'} />
        <div className="orders">
          <div className="order-row-header">
            <h3 className="order-column">Tailor</h3>
            <h3 className="order-column">Assigned</h3>
            <h3 className="order-column">In Stock</h3>
            <h3 className="order-column">Late</h3>
          </div>
          <hr className="order-header-hr" />
          <div className="order-rows">{this.renderTailorRows()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    tailorList: store.tailorList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({setLoader, removeLoader, getTailorList}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TailorsIndex);
