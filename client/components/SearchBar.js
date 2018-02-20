import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchOrders } from '../actions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    searchResults: store.searchResults,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchOrders }, dispatch);
};

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      redirect: false,
    };
  }

  static propTypes = {
    searchResults: PropTypes.array.isRequired, // mapStateToProps
    searchOrders: PropTypes.func.isRequired, // mapDispatchToProps
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .searchOrders(this.state.value)
      .then(res => {
        this.setState({ redirect: true, value: '' });
      })
      .then(err => console.log('err', err));
  };

  resetRedirectState = () => {
    setTimeout(() => {
      this.setState({ redirect: false });
    }, 1000);
  };

  renderRedirect(state) {
    if (state.redirect) {
      this.resetRedirectState();
      return <Redirect to="/search-results" />;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          className="orders-search"
          placeholder="Search Orders"
          name="search"
          type="text"
        />
        {this.renderRedirect(this.state)}
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
