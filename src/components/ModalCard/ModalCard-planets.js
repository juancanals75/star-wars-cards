import React from "react"
import Modal from 'react-bootstrap/Modal'

import "./ModalCard.css"

function ModalCardPlanets(props) {
  const {name} = props.modalInfo

  return (
    <Modal show={props.displayModal} onHide={props.onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>PLANETS MODAL</h3>
      </Modal.Body>
    </Modal>
  )
}

export default ModalCardPlanets
