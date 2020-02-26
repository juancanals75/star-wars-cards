import React, {useContext} from "react"

import {Context} from "../Context"

import "./ModalCard.css"

function ModalCardPeople(props) {
  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
    homeworld,
    species
  } = props.modalInfo

  const {planetsArr, speciesArr, showModal} = useContext(Context)
  const planetCheck = planetsArr.find(item => item.url === homeworld)

  let newSpeciesArr
  for (var i = 0; i < species.length; i++) {
    for (var j = 0; j < speciesArr.length; j++) {
      if (species[i] === speciesArr[j].url) {
        newSpeciesArr = speciesArr[j]
      }
    }
  }

  return (
    <>
      <div className="modal-attributes pe">
        <div>Birth year: <span>{birth_year}</span></div>
        <div>Eye color: <span>{eye_color}</span></div>
        {gender === "n/a" ? null : <div>Gender: <span>{gender}</span></div>}
        {hair_color === "n/a" ? null : <div>Hair color: <span>{hair_color}</span></div>}
        <div>Height: <span>{height === "unknown" ? height : height + "cm"}</span></div>
        <div>Mass: <span>{mass === "unknown" ? mass : mass + "Kg"}</span></div>
        <div>Skin color: <span>{skin_color}</span></div>
        {homeworld ? <div>Homeworld: <span className="clickable" onClick={() => showModal(planetCheck.url)}>{planetCheck.name}</span></div> : null}
        {species ? <div>Specie: <span className="clickable" onClick={() => showModal(newSpeciesArr.url)}>{newSpeciesArr.name}</span></div> : null}
      </div>
    </>
  )
}

export default ModalCardPeople
