import React, {useContext} from 'react'
import {Context} from "../../utils/Context"

function SearchBar() {
  const {searchTxt, handleChange} = useContext(Context)

  return (
    <div className="search-container">
      <input
      name="search"
      value={searchTxt}
      placeholder="Search by name"
      onChange={event => handleChange(event)}
      />
    </div>
  )
}

export default SearchBar
