import React from 'react'
import Modal from 'react-bootstrap/Modal'

function ModalCardView(props) {
  const {name, mass, height, birth_year, eye_color, gender, hair_color} = props.modalInfo

  let genderTxt
  if (gender === "none" || gender === "n/a") {
    genderTxt = "n/a"
  } else {
    genderTxt = "Gender: " + gender
  }

  let hairTxt
  if (hair_color === "none" || hair_color === "n/a") {
    hairTxt = "n/a"
  } else {
    hairTxt = "Hair Color: " + hair_color
  }

  return (
    <Modal show={props.displayModal} onHide={props.onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Known Attributes</h4>
        <p>{mass === "unknown" ? null : "Mass: " + mass + "Kg"}</p>
        <p>{height === "unknown" ? null : "Height: " + height + "cm"}</p>
        <p>{birth_year === "unknown" ? null : "Year of birth: " + birth_year}</p>
        <p>Eye color: {eye_color}</p>
        <p>{genderTxt === "n/a" ? null : genderTxt}</p>
        <p>{hairTxt === "n/a" ? null : hairTxt}</p>
      </Modal.Body>
    </Modal>
  )
}

export default ModalCardView
