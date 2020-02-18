import React, {useContext} from "react"
import Modal from 'react-bootstrap/Modal'

import {Context} from "../../utils/Context"

import "./ModalCard.css"

function ModalCardSpecies(props) {
  const {
    name,
    classification,
    designation,
    average_height,
    average_lifespan,
    eye_colors,
    hair_colors,
    skin_colors,
    language,
    homeworld
  } = props.modalInfo

  const {planetsArr} = useContext(Context)
  const planetCheck = planetsArr.find(item => item.url === homeworld)

  return (
    <div className="modal-attributes">
      <div>Classification: <span>{classification}</span></div>
      <div>Designation: <span>{designation}</span></div>
      <div>Average height: <span>{average_height + "cm"}</span></div>
      <div>Average lifespan: <span>{average_lifespan + " years"}</span></div>
      <div>Language: <span>{language}</span></div>
      <div>Homeworld: <span>{planetCheck.name}</span></div>
      <div>Skin colors: <span>{skin_colors}</span></div>
      <div>Hair colors: <span>{hair_colors}</span></div>
      <div>Eye colors: <span>{eye_colors}</span></div>
    </div>
  )
}

export default ModalCardSpecies
