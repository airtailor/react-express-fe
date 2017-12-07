import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoader, removeLoader, getUsersList } from './ducks/actions';
import SectionHeader from '../../SectionHeader';
import { ValidatePassword } from '../../../utils/validations';
import isEmpty from 'lodash/isEmpty';

const mapStateToProps = store => {
  return {
    users: store.usersList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setLoader, removeLoader, getUsersList },
    dispatch
  );
};

class UsersList extends Component {
  componentDidMount() {
    const { users } = this.props;
    console.log('USERS (DID MOUNT)', users);
    if (isEmpty(users)) {
      const { setLoader, removeLoader, getUsersList } = this.props;
      setLoader();
      getUsersList().then(res => removeLoader());
    }
  }

  renderUserRow = user => {
    const { id, email, store } = user;

    let storeName = 'N/A';
    if (store) {
      storeName = store.name;
    }

    const route = `/users/${id}/edit`;
    return (
      <div key={id}>
        <div className="user-data-row">
          <Link to={route} className="user-link">
            <div className="user-data-cell">{id}</div>
            <div className="user-data-cell">{email}</div>
            <div className="user-data-cell">{storeName}</div>
          </Link>
        </div>
      </div>
    );
  };

  renderUserRows = () => {
    const { users } = this.props;
    if (!isEmpty(users)) {
      const userRowSet = users.map(user => this.renderUserRow(user));
      return <div className="users-container">{userRowSet}</div>;
    } else {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Users...</div>
        </div>
      );
    }
  };

  renderUserHeaders = () => {
    return (
      <div>
        <div className="user-headers-container">
          <div className="user-headers-row">
            <h3 className="user-header-cell">Id</h3>
            <h3 className="user-header-cell">Email</h3>
            <h3 className="user-header-cell">Store Name</h3>
          </div>
          <hr className="user-header-break-row" />
        </div>
      </div>
    );
  };

  render() {
    const userHeaders = this.renderUserHeaders;
    const userRows = this.renderUserRows;
    const { users } = this.props;
    console.log(users);
    return (
      <div>
        // pass in users/new to the link
        <SectionHeader text={'Manage Users'} />
        <div className="users">
          {userHeaders()}
          {userRows()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
