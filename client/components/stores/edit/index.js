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
    {
      getEditStore,
      updateStore,
      updateEditStore,
      setGrowler,
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

class StoresEdit extends Component {
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
          this.props.setGrowler({ kind, message });
        }
      })
      .catch(err => {
        debugger;
        console.log(err);
      });
  };

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

    const tailorId = default_tailor_id ? default_tailor_id : '';

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

          <SelectTailor
            onChange={this.updateState}
            fieldName="default_tailor_id"
            headerText="Set Default Tailor"
            tailorId={tailorId}
          />

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

    if (isEmpty(store)) {
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

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {
//   getCurrentStore,
//   updateStore,
//   setGrowler,
//   setLoader,
//   removeLoader,
// } from '../../actions';
// import FormField from './../FormField';
// import SectionHeader from './../SectionHeader';
// import UsersEdit from '../users/UsersEdit';
//
// class StoresEdit extends Component {
//   constructor(props) {
//     super();
//     this.state = {};
//     this.updateState = this.updateState.bind(this);
//     this.updateAddressField = this.updateAddressField.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentDidMount() {
//     const store = {...this.props.store};
//     this.setState(store);
//     this.props
//       .getCurrentStore(this.props.match.params.store_id)
//       .catch(err => console.log(err));
//   }
//
//   updateState(field, value) {
//     this.setState({[field]: value});
//   }
//
//   updateAddressField(field, value) {
//     this.setState({address: {[field]: value}});
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     var self = this;
//     const store = this.state;
//     this.props.setLoader();
//     this.props
//       .updateStore({store})
//       .then(res => {
//         if (res.data.body.errors) {
//           const kind = 'warning';
//           const message = res.data.body.errors[0];
//
//           self.setState(self.props.store);
//           self.props.setGrowler({kind, message});
//         } else if (res.data.body) {
//           const kind = 'success';
//           const message = 'Store Updated Successfully!';
//
//           this.props.setGrowler({kind, message});
//         }
//       })
//       .then(() => this.props.removeLoader())
//       .catch(err => console.log(err));
//   }
//
//   renderForm(data) {
//     if (!data.address) {
//       return;
//     }
//
//     const {
//       name,
//       phone,
//       address: {street, street_two, city, state_province, zip_code},
//     } = data;
//
//     return (
//       <div>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <FormField
//             value={name}
//             fieldName={'name'}
//             title={'Name:'}
//             onChange={this.updateState}
//           />
//
//           <FormField
//             value={phone}
//             fieldName={'phone'}
//             title={'Phone:'}
//             onChange={this.updateState}
//           />
//
//           <FormField
//             value={street}
//             fieldName={'street'}
//             title={'Street:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={street_two}
//             fieldName={'street_two'}
//             title={'Unit:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={city}
//             fieldName={'city'}
//             title={'City:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={state_province}
//             fieldName={'state_province'}
//             title={'State:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={zip_code}
//             fieldName={'zip_code'}
//             title={'Zip:'}
//             onChange={this.updateAddressField}
//           />
//           <input className="short-button" type="submit" value="Update Store" />
//         </form>
//       </div>
//     );
//   }
//
//   render() {
//     const {store} = this.props;
//     console.log('store', store);
//
//     if (!store) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className="pos-rel">
//           <SectionHeader text={`Edit / ${store.name}`} />
//           <div className="form-container edit-account">
//             <h3>Edit Store</h3>
//
//             {this.renderForm(this.state)}
//             <br />
//             <hr />
//             <br />
//             <UsersEdit />
//           </div>
//         </div>
//       );
//     }
//   }
// }
//
// const mapStateToProps = store => {
//   return {
//     store: store.currentStore,
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {getCurrentStore, updateStore, setGrowler, setLoader, removeLoader},
//     dispatch
//   );
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(StoresEdit);
