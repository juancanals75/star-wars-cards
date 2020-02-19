import React from "react"

import "./ModalCard.css"

function ModalCardVehicles(props) {
  const {
    manufacturer,
    model,
    vehicle_class,
    length,
    cost_in_credits,
    crew,
    passengers,
    max_atmosphering_speed,
    cargo_capacity,
    consumables
  } = props.modalInfo

  return (
    <div className="modal-attributes ve">
      <div>Manufacturer: <span>{manufacturer}</span></div>
      <div>Vehicle class: <span>{vehicle_class}</span></div>
      <div>Model: <span>{model}</span></div>
      <div>Cost: <span>{cost_in_credits + " credits"}</span></div>
      <div>Length: <span>{length + "m"}</span></div>
      <div>Crew: <span>{crew}</span></div>
      <div>Passengers: <span>{passengers}</span></div>
      <div>Max atmospheric speed: <span>{max_atmosphering_speed + "km/h"}</span></div>
      <div>Cargo capacity: <span>{cargo_capacity + "kg"}</span></div>
      <div>Consumables capacity: <span>{consumables}</span></div>
    </div>
  )
}

export default ModalCardVehicles
