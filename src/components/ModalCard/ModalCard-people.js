import React, {useContext} from "react"

import {Context} from "../../utils/Context"

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

  const {planetsArr, speciesArr} = useContext(Context)
  const planetCheck = planetsArr.find(item => item.url === homeworld)

  let newSpeciesArr = []
  for (var i = 0; i < species.length; i++) {
    for (var j = 0; j < speciesArr.length; j++) {
      if (species[i] === speciesArr[j].url) {
        newSpeciesArr.push(speciesArr[j].name)
      }
    }
  }

  return (
    <div className="modal-attributes">
      <div>Birth year: <span>{birth_year}</span></div>
      <div>Eye color: <span>{eye_color}</span></div>
      <div>Gender: <span>{gender}</span></div>
      <div>Hair color: <span>{hair_color}</span></div>
      <div>Height: <span>{height + "cm"}</span></div>
      <div>Mass: <span>{mass + "Kg"}</span></div>
      <div>Skin color: <span>{skin_color}</span></div>
      <div>Homeworld: <span>{planetCheck.name}</span></div>
      <div>Species: <span>{newSpeciesArr === [] ? "Unknown" : newSpeciesArr}</span></div>
    </div>
  )
}

export default ModalCardPeople
