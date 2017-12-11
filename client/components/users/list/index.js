import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoader, removeLoader, getUsersList } from './ducks/actions';
import SectionHeader from '../../SectionHeader';
import { isEmpty, startCase } from 'lodash';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return { users: store.usersList };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setLoader, removeLoader, getUsersList },
    dispatch
  );
};

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired, // mapStateToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    getUsersList: PropTypes.func.isRequired, // mapDispatchToProps
  };
  componentDidMount() {
    const { users } = this.props;
    if (isEmpty(users)) {
      const { setLoader, removeLoader, getUsersList } = this.props;
      setLoader();
      getUsersList().then(res => removeLoader());
    }
  }

  extractRoles(roles, initVal = '') {
    return Object.keys(roles).reduce(
      (acc, key, i) =>
        roles[key] ? startCase(key) + (i == 0 ? '' : ', ') + acc : '',
      initVal
    );
  }

  renderUserRow = user => {
    const { id, email, store } = user;
    const { valid_roles: roles } = user;
    const roleString = isEmpty(roles) ? 'N/A' : this.extractRoles(roles);
    const storeName = store ? store.name : 'N/A';
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
      return <div className="user-container">{userRowSet}</div>;
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
    return (
      <div>
        <SectionHeader text={'Manage Users'} link={'/users/new'} />
        <div className="users">
          {userHeaders()}
          {userRows()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
