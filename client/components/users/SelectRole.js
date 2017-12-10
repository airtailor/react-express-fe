import React, { Component } from 'react';
import FormSelect from '../FormSelect';
import PropTypes from 'prop-types';

class SelectRole extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired, // parentComponent
    role: PropTypes.string.isRequired, // parentComponent
  };

  render() {
    const { onChange, role } = this.props;

    if (!role.admin) {
      return <div />;
    }

    const validRoles = [
      { id: 'tailor', name: 'Tailor' },
      { id: 'retailer', name: 'Retailer' },
    ];
    return (
      <div className="SelectRole">
        <h3>Roles</h3>
        <FormSelect
          value={role}
          options={validRoles}
          fieldName={'role'}
          title={'Select Role:'}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default SelectRole;
