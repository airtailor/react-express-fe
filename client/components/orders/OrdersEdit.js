import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import FormSelect from '../FormSelect';
import FormField from '../FormField';
import {
  getCurrentOrder,
  updateOrder,
  getTailorList,
  setLoader,
  removeLoader,
  setGrowler,
} from '../../actions';
import SelectTailor from './orderForms/SelectTailor';
import SectionHeader from '../SectionHeader';
import Checkbox from '../Checkbox';

const mapStateToProps = store => {
  return {
    order: store.currentOrder,
    store: store.currentStore,
    tailors: store.tailorList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getTailorList,
      getCurrentOrder,
      updateOrder,
      setLoader,
      removeLoader,
      setGrowler,
    },
    dispatch
  );
};

class OrdersEdit extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired, // mapStateToProps
    tailors: PropTypes.array.isRequired, // mapStateToProps
    getTailorList: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    updateOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();

    this.state = props.order;
  }

  componentDidMount() {
    const { order } = this.props;
    if (isEmpty(order)) {
      const {
        match: { params: { order_id: orderId } },
        store: { id: storeId },
      } = this.props;

      this.props.setLoader();
      this.props
        .getCurrentOrder(storeId, orderId)
        .then(res => {
          this.props.removeLoader();

          const { order } = this.props;
          this.setState(order);
        })
        .catch(err => console.log(err));
    }
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateOrder({ order: this.state })
      .then(res => {
        this.props.setGrowler({ kind: 'success', message: 'Order updated!' });
      })
      .catch(err => console.log('errr', err));
  }

  render() {
    const order = this.state;
    const submit = e => this.handleSubmit(e);
    const updateState = this.updateState;

    let headerText = `Orders / Edit`;
    if (isEmpty(order)) {
      return <SectionHeader text={headerText} />;
    } else {
      const {
        id,
        fulfilled,
        arrived,
        customer: { first_name: firstName, last_name: lastName },
        total,
        weight,
        provider_id,
      } = order;

      headerText = `Orders / Edit / ${id}`;
      const backLink = `/orders/${this.state.id}`;

      return (
        <div>
          <SectionHeader text={headerText} />
          <Link to={backLink}>Back</Link>
          <form onSubmit={submit}>
            <FormField
              value={firstName}
              fieldName={'first_name'}
              title={'First Name:'}
              onChange={() => {}}
            />

            <FormField
              value={lastName}
              fieldName={'last_name'}
              title={'Last Name:'}
              onChange={() => {}}
            />

            <Checkbox
              checked={arrived}
              type="checkbox"
              text={'Arrived?'}
              name={'arrived'}
              fieldName="arrived"
              onChange={updateState}
            />

            <Checkbox
              checked={fulfilled}
              type="checkbox"
              text={'Fulfilled?'}
              name={'fulfilled'}
              fieldName="fulfilled"
              onChange={updateState}
            />

            <FormField
              value={total}
              fieldName={'total'}
              title={'Total: $'}
              onChange={updateState}
            />

            <FormField
              value={weight}
              fieldName={'weight'}
              title={'Weight (grams):'}
              onChange={updateState}
            />

            <SelectTailor provider_id={provider_id} onChange={updateState} />

            <FormField
              value={total}
              fieldName={'total'}
              title={'Total:'}
              onChange={updateState}
            />

            <input type="submit" className="short-button" value="Update" />
          </form>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersEdit);
