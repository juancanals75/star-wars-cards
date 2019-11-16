import React from 'react'

export default function SearchBar(props) {
  return (
    <div className="search">
      <input
        name="search"
        value={props.searchTxt}
        placeholder="Search by name"
        onChange={props.handleChange}
      />
    </div>
  )
}
