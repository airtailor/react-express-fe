import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithSectionHeader from '../HOC/WithSectionHeader';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <h4>Lists</h4>
        <div>
          <Link to="/admin/reports">Reports</Link>
        </div>
        <br /> <br />
        <div>
          <Link to="/users/list">User List</Link>
        </div>
        <br /> <br />
        <div>
          <Link to="/admin/tailors">Tailor List</Link>
        </div>
        <br /> <br />
        <div>
          <Link to="/admin/retailers">Retailer List</Link>
        </div>
        <h4>Make a New Thing</h4>
        <div>
          <Link to="/admin/companies/new">New Company</Link>
        </div>
        <br /> <br />
        <div>
          <Link to="/stores/new">New Store</Link>
        </div>
        <br /> <br />
        <div>
          <Link to="/users/new">New User</Link>
        </div>
        <br /> <br />
      </div>
    );
  }
}

export default WithSectionHeader(Dashboard);
