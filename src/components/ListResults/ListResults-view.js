import React from 'react'
import "./ListResults.css"

const ListResultsView = props => (
  <div className="list-container">
    <div className="list-results">
      {props.filtered.map(item => (
        <div className="list-item">
          {item}
        </div>
      ))}
    </div>
  </div>
)

export default ListResultsView
