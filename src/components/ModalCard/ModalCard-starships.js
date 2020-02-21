import React from "react"

import "./ModalCard.css"

function ModalCardStarships(props) {
  const {
    manufacturer,
    starship_class,
    model,
    cost_in_credits,
    length,
    crew,
    passengers,
    max_atmosphering_speed,
    hyperdrive_rating,
    MGLT,
    cargo_capacity,
    consumables
  } = props.modalInfo

  const attCheck = (att, txt) => att === "unknown" ? att : att + txt

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div className="modal-attributes st">
      <div>Manufacturer: <span>{manufacturer}</span></div>
      <div>Starship class: <span>{starship_class}</span></div>
      <div>Model: <span>{model}</span></div>
      <div>Cost: <span>{attCheck(formatNumber(cost_in_credits), " credits")}</span></div>
      <div>Length: <span>{attCheck(formatNumber(length), "m")}</span></div>
      <div>Crew: <span>{formatNumber(crew)}</span></div>
      <div>Passengers: <span>{formatNumber(passengers)}</span></div>
      <div>Max atmospheric speed: <span>{max_atmosphering_speed === "n/a" ? "Incapable" : attCheck(max_atmosphering_speed, "km/h")}</span></div>
      <div>Hyperdrive rating: <span>{hyperdrive_rating}</span></div>
      <div>Megalights per hour: <span>{MGLT}</span></div>
      <div>Cargo capacity: <span>{attCheck(formatNumber(cargo_capacity), "kg")}</span></div>
      <div>Consumables capacity: <span>{consumables}</span></div>
    </div>
  )
}

export default ModalCardStarships
