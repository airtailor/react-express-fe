import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getCurrentStore,
  updateStore,
  setGrowler,
  setLoader,
  removeLoader,
} from '../../actions';
import FormField from './../FormField';
import SectionHeader from './../SectionHeader';
import UsersEdit from '../users/UsersEdit';

class StoresEdit extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const store = {...this.props.store};
    this.setState(store);
    this.props
      .getCurrentStore(this.props.match.params.store_id)
      .then(() => this.setState({store: this.props.store}))
      .catch(err => console.log(err));
  }

  updateState(field, value) {
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    const store = this.state;
    this.props.setLoader();
    this.props
      .updateStore({store})
      .then(res => {
        if (res.data.body.errors) {
          const kind = 'warning';
          const message = res.data.body.errors[0];

          self.setState(self.props.store);
          self.props.setGrowler({kind, message});
        } else if (res.data.body) {
          const kind = 'success';
          const message = 'Store Updated Successfully!';

          this.props.setGrowler({kind, message});
        }
      })
      .then(() => this.props.removeLoader())
      .catch(err => console.log(err));
  }

  renderForm(data) {
    const {
      name,
      phone,
      address: {street, street_two, city, state_province, zip_code},
    } = data;

    console.log('data', data);
    console.log('props', this.props);

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

          <FormField
            value={street}
            fieldName={'street'}
            title={'Street:'}
            onChange={this.updateState}
          />

          <FormField
            value={street_two}
            fieldName={'street_two'}
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
            title={'Zip Code:'}
            onChange={this.updateState}
          />
          <input className="short-button" type="submit" value="Update Store" />
        </form>
      </div>
    );
  }

  render() {
    console.log('poop', this.props.store);
    const {store} = this.state;
    if (!store) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="pos-rel">
          <SectionHeader text={`Edit / ${store.name}`} />
          <div className="form-container edit-account">
            <h3>Edit Store</h3>

            {this.renderForm(store)}
            <br />
            <hr />
            <br />
            <UsersEdit />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    store: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getCurrentStore, updateStore, setGrowler, setLoader, removeLoader},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresEdit);
