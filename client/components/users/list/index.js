import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoader, removeLoader, getUsersList } from './ducks/actions';
import SectionHeader from '../../SectionHeader';
import { ValidatePassword } from '../../../utils/validations';

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
    const { setLoader, removeLoader, getUsersList } = this.props;
    setLoader();
    getUsersList().then(res => {
      removeLoader();
    });
  }

  render() {
    const { users } = this.props;
    console.log('USERS', users);

    return (
      <div>
        // pass in users/new to the link
        <SectionHeader />
        // table for users // links to individual users to edit them.
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
