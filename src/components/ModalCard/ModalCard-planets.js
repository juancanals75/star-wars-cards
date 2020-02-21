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

  const attCheck = (att, txt) => att === "unknown" ? att : att + txt

  function formatPopulation(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div className="modal-attributes pl">
      <div>Diameter: <span>{attCheck(diameter, "km")}</span></div>
      <div>Rotation period: <span>{attCheck(rotation_period, "h")}</span></div>
      <div>Orbital Period: <span>{attCheck(orbital_period, " days")}</span></div>
      <div>Gravity: <span>{gravity === "N/A" ? "Unavailable" : attCheck(gravity, " G")}</span></div>
      <div>Population: <span>{population === "unknown" ? population : formatPopulation(population)}</span></div>
      <div>Climate: <span>{climate}</span></div>
      <div>Terrain: <span>{terrain}</span></div>
      <div>Surface water: <span>{attCheck(surface_water, "%")}</span></div>
    </div>
  )
}

export default ModalCardPlanets
