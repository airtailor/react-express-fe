import React from 'react';
import SearchImg from '../images/search.png';

const SearchBar = (props) => {
  return (
    <input
      className='orders-search'
      placeholder='Search Orders'
      name='search'
      type='text' />
  );
}

export default SearchBar;
