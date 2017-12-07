import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import {
  getEditStore,
  // updateEditStore is an action that will update the editStoreFormReducer
  updateEditStore,
  // updateStore is an action that will send a request to update the store
  // in the Rails API
  updateStore,
  setGrowler,
  setLoader,
  removeLoader,
} from './ducks/actions';

import FormField from './../../FormField';
import SectionHeader from './../../SectionHeader';
import UsersEdit from '../../users/UsersEdit';
import SelectTailor from '../../orders/orderForms/SelectTailor';

const mapStateToProps = store => {
  return {
    store: store.editStore,
    tailors: store.tailorList,
    userRoles: store.userRoles,
    currentUser: store.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
<<<<<<< HEAD:client/components/stores/edit/index.js
    {
      getEditStore,
      updateStore,
      updateEditStore,
      setGrowler,
      setLoader,
      removeLoader,
    },
=======
    { getCurrentStore, updateStore, setGrowler, setLoader, removeLoader },
>>>>>>> new-component-users-new:client/components/stores/StoresEdit.js
    dispatch
  );
};

class StoresEdit extends Component {
<<<<<<< HEAD:client/components/stores/edit/index.js
=======
  constructor(props) {
    super();
    this.state = {};
  }

>>>>>>> new-component-users-new:client/components/stores/StoresEdit.js
  static propTypes = {
    store: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    getEditStore: PropTypes.func.isRequired, // mapDispatchToProps
    updateStore: PropTypes.func.isRequired, // mapDispatchToProps
    updateEditStore: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps,
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps,
  };

  componentDidMount() {
<<<<<<< HEAD:client/components/stores/edit/index.js
    const {
      getEditStore,
      match: { params: { store_id: paramsId } },
      currentUser: { user: { store_id: userStoreId } },
      userRoles: { admin },
    } = this.props;

    const storeId = admin ? paramsId : userStoreId;

    getEditStore(storeId).catch(err => console.log(err));
  }

  updateState = (field, value) => {
    this.props.updateEditStore(field, value);
  };

=======
    const store = { ...this.props.store };
    this.setState(store);
    this.props
      .getCurrentStore(this.props.match.params.store_id)
      .catch(err => console.log(err));
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

>>>>>>> new-component-users-new:client/components/stores/StoresEdit.js
  handleSubmit = e => {
    e.preventDefault();
    var self = this;
    const { store } = this.props;
    this.props.setLoader();
    this.props
      .updateStore({ store })
      .then(res => {
        this.props.removeLoader();

        if (res.data.body.errors) {
          const kind = 'warning';
          const message = res.data.body.errors[0];
          self.setState(self.props.store);
          self.props.setGrowler({ kind, message });
        } else if (res.data.body) {
          const kind = 'success';
          const message = 'Store Updated Successfully!';
<<<<<<< HEAD:client/components/stores/edit/index.js
          this.props.setGrowler({ kind, message });
        }
      })
=======
          this.props.getCurrentStore(store.id);

          this.props.setGrowler({ kind, message });
        }
      })
      .then(res => {
        const kind = 'success';
        const message = 'Store Updated Successfully!';
        this.props.getCurrentStore(store.id).then(() => {
          this.setState(this.props.store);
        });

        this.props.setGrowler({ kind, message });
        this.props.removeLoader();
      })
>>>>>>> new-component-users-new:client/components/stores/StoresEdit.js
      .catch(err => {
        debugger;
        console.log(err);
      });
  };
<<<<<<< HEAD:client/components/stores/edit/index.js

  renderTailorSelect(tailorId, admin) {
    if (admin) {
      return (
        <SelectTailor
          onChange={this.updateState}
          fieldName="default_tailor_id"
          headerText="Set Default Tailor"
          tailorId={tailorId}
        />
      );
    }
  }

  renderForm() {
    const {
      name,
      phone,
      street,
      unit,
      city,
      state_province,
      zip_code,
      default_tailor_id,
    } = this.props.store;

    const { admin } = this.props.userRoles;

    const tailorId = default_tailor_id ? default_tailor_id : '';
=======

  renderForm(data) {
    const { name, phone, street, unit, city, state_province, zip_code } = data;
>>>>>>> new-component-users-new:client/components/stores/StoresEdit.js

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormField
            value={name}
            fieldName={'name'}
            title={'Name:'}
            onChange={this.updateState}
          />

          <FormField
            value={phone}
            fieldName={'phone'}
            title={'Phone:'}
            onChange={this.updateState}
          />

          {this.renderTailorSelect(tailorId, admin)}

          <FormField
            value={street}
            fieldName={'street'}
            title={'Street:'}
            onChange={this.updateState}
          />

          <FormField
            value={unit}
            fieldName={'unit'}
            title={'Unit:'}
            onChange={this.updateState}
          />

          <FormField
            value={city}
            fieldName={'city'}
            title={'City:'}
            onChange={this.updateState}
          />

          <FormField
            value={state_province}
            fieldName={'state_province'}
            title={'State:'}
            onChange={this.updateState}
          />

          <FormField
            value={zip_code}
            fieldName={'zip_code'}
            title={'Zip:'}
            onChange={this.updateState}
          />
          <input className="short-button" type="submit" value="Update Store" />
        </form>
      </div>
    );
  }

  render() {
    const { store } = this.props;
<<<<<<< HEAD:client/components/stores/edit/index.js

    if (isEmpty(store)) {
=======
    if (!store) {
>>>>>>> new-component-users-new:client/components/stores/StoresEdit.js
      return <div>Loading...</div>;
    }

    return (
      <div className="pos-rel">
        <SectionHeader text={`Edit / ${store.name}`} />
        <div className="form-container edit-account">
          <h3>Edit Store</h3>

          {this.renderForm()}
          <br />
          <hr />
          <br />
          <UsersEdit />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresEdit);
