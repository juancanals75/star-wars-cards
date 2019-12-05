import React from 'react'
import Modal from 'react-bootstrap/Modal'

function ModalCard(props) {
  const {name, mass, height, birth_year, eye_color, gender, hair_color} = props.modalInfo

  let genderTxt
  if (gender === "none") {
    genderTxt = "No Gender"
  } else if (gender === "n/a") {
    genderTxt = "Gender: Unknown"
  } else {
    genderTxt = "Gender: " + gender
  }

  let hairTxt
  if (hair_color === "none") {
    hairTxt = "No Hair"
  } else if (hair_color === "n/a") {
    hairTxt = "Hair Color: Unknown"
  } else {
    hairTxt = "Hair Color: " + hair_color
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closebutton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Mass: {mass === "unknown" ? "Unknown" : mass + "Kg"}</p>
        <p>Height: {height === "unknown" ? "Unknown" : height + "cm"}</p>
        <p>Year of birth: {birth_year === "unknown" ? "Unknown" : birth_year}</p>
        <p>Eye color: {eye_color}</p>
        <p>{genderTxt}</p>
        <p>{hairTxt}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="back-btn" onClick={props.handleClose}>BACK</div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCard
