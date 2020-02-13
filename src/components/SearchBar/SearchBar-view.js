import React from 'react'

const SearchBar = (props) => (
  <div className="search-container">
    <input
      name="search"
      value={props.searchTxt}
      placeholder="Search by name"
      onChange={props.handleChange}
    />
  </div>
)

export default SearchBar
