import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGrowler } from '../../actions';
import SectionHeader from './../SectionHeader';
import { ValidatePassword } from '../../utils/validations';

const mapStateToProps = store => {
  return {
    users: store.userList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setGrowler }, dispatch);
};

class UsersList extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersEdit);
