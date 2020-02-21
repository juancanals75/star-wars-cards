import React, {useContext} from "react"

import {Context} from "../Context"

import "./ModalCard.css"

function ModalCardSpecies(props) {
  const {
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

  const {planetsArr, showModal} = useContext(Context)
  const planetCheck = planetsArr.find(item => item.url === homeworld)

  const attCheck = (att, txt) => att === "unknown" ? att : att + txt

  return (
    <div className="modal-attributes sp">
      <div>Classification: <span>{classification}</span></div>
      <div>Designation: <span>{designation}</span></div>
      {average_height === "n/a" ? null : <div>Average height: <span>{attCheck(average_height, "cm")}</span></div>}
      <div>Average lifespan: <span>{attCheck(average_lifespan, " years")}</span></div>
      {language === "n/a" ? null : <div>Language: <span>{language}</span></div>}
      <div>Homeworld: <span className={planetCheck ? "clickable" : null} onClick={() => planetCheck ? showModal(planetCheck.url) : null}>{planetCheck ? planetCheck.name : "unknown"}</span></div>
      <div>Skin colors: <span>{skin_colors}</span></div>
      <div>Hair colors: <span>{hair_colors}</span></div>
      <div>Eye colors: <span>{eye_colors}</span></div>
    </div>
  )
}

export default ModalCardSpecies
