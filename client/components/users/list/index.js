import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoader, removeLoader, getUsersList } from './ducks/actions';
import SectionHeader from '../../SectionHeader';
import { ValidatePassword } from '../../../utils/validations';
import { isEmpty, startCase } from 'lodash';

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
    if (isEmpty(users)) {
      const { setLoader, removeLoader, getUsersList } = this.props;
      setLoader();
      getUsersList().then(res => removeLoader());
    }
  }

  extractRoles(roles) {
    const reducer = (acc, key, i) => {
      if (roles[key]) {
        if (i == 0) {
          return startCase(key);
        } else {
          return startCase(key) + ', ' + acc;
        }
      }
    };
    return Object.keys(roles).reduce(reducer, '');
  }

  renderUserRow = user => {
    const { id, email, store } = user;
    const { valid_roles: roles } = user;

    let roleString;
    if (!isEmpty(roles)) {
      roleString = this.extractRoles(roles);
    } else {
      roleString = 'N/A';
    }

    console.log(roles, roleString);

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
            <div className="user-data-cell">{roleString}</div>
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
            <h3 className="user-header-cell">Role</h3>
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
