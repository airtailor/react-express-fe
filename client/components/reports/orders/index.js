import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import WithSectionHeader from '../../HOC/WithSectionHeader';
import OrderReportRows from './OrderReportRows';
import {setLoader, removeLoader, getCurrentReport} from './ducks/actions';

const mapStateToProps = store => {
  return {
    report: store.currentReport,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getCurrentReport, setLoader, removeLoader},
    dispatch
  );
};

class OrdersReport extends Component {
  static propTypes = {
    report: PropTypes.object.isRequired, // mapStateToProps
    getCurrentReport: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    this.props
      .getCurrentReport()
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  }

  render() {
    console.log(this.props.report);
    return (
      <div>
        <h1>Hi Im Order Reports</h1>
        <Link to="/admin/reports">All Reports</Link>
        <OrderReportRows {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(OrdersReport)
);
