import React from "react"

import "./ModalCard.css"

function ModalCardPlanets(props) {
  const {
    diameter,
    rotation_period,
    orbital_period,
    gravity,
    population,
    climate,
    terrain,
    surface_water
  } = props.modalInfo

  return (
    <div className="modal-attributes pl">
      <div>Diameter: <span>{diameter + "km"}</span></div>
      <div>Rotation period: <span>{rotation_period + "h"}</span></div>
      <div>Orbital Period: <span>{orbital_period + " days"}</span></div>
      <div>Gravity: <span>{gravity + "G"}</span></div>
      <div>Population: <span>{population}</span></div>
      <div>Climate: <span>{climate}</span></div>
      <div>Terrain: <span>{terrain}</span></div>
      <div>Surface water: <span>{surface_water + "%"}</span></div>
    </div>
  )
}

export default ModalCardPlanets
