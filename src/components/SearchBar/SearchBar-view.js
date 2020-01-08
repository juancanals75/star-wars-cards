import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => (
  <div className="search">
    <input
      name="search"
      value={props.searchTxt}
      placeholder="Search by name"
      onChange={props.handleChange}
    />
  </div>
)

export default SearchBar
