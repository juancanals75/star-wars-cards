import React, {useContext} from 'react'
import {Context} from "../../utils/Context"

import "./ListResults.css"

function ListResultsView(props) {
  const {showModal} = useContext(Context)

  return (
    <div className="list-container">
      <div className="list-results">
        {props.filtered.map(item => (
          <div key={item.url} className="list-item" onClick={() => showModal(item.url)}>
            <span>{item.name.toLowerCase()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListResultsView
