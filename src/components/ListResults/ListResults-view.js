import React, {useContext} from 'react'
import {Context} from "../../utils/Context"

import LoadingScreen from "../LoadingScreen"
import ModalCard from "../ModalCard"

import "./ListResults.css"

function ListResultsView(props) {
  const {showModal} = useContext(Context)

  return (
    <div className="list-container">
      <ModalCard />
      <div className="list-results">
        {props.filtered.map(item => (
          <div key={item.url} className="list-item" onClick={() => showModal(item.url)}>
            {item.name.toLowerCase()}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListResultsView
