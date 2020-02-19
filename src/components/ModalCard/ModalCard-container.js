import React, {useContext} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"

import {Context} from "../Context"

import ModalCardPeople from "./ModalCard-people"
import ModalCardSpecies from "./ModalCard-species"
import ModalCardPlanets from "./ModalCard-planets"
import ModalCardStarships from "./ModalCard-starships"
import ModalCardVehicles from "./ModalCard-vehicles"

function ModalCardContainer(props) {

  const {displayModal, hideModal, modalInfo, modalCategory} = useContext(Context)

  function modalAttributes(cat) {
    switch (cat) {
      case "pe":
        return <ModalCardPeople modalInfo={modalInfo}/>
      case "sp":
        return <ModalCardSpecies modalInfo={modalInfo}/>
      case "pl":
        return <ModalCardPlanets modalInfo={modalInfo}/>
      case "st":
        return <ModalCardStarships modalInfo={modalInfo}/>
      case "ve":
        return <ModalCardVehicles modalInfo={modalInfo}/>
      case "fi":
        return null
      default:
        return null
    }
  }
  const modalAtt = modalAttributes(modalCategory)



  return (
    <Modal show={displayModal} onHide={hideModal} centered>
      <Modal.Header>
        <Modal.Title>{modalInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalAtt}
      </Modal.Body>
      <Modal.Footer bsPrefix={`modal-footer ${modalCategory}`}>
        <div className="episodes">
          <h3>episodes</h3>
          <h4>I II III IV V VI VII</h4>
        </div>
        <div className="footer-buttons">
          <Button variant="dark">Vehicles</Button>
          <Button variant="dark">Starships</Button>
        </div>
      </Modal.Footer>
    </Modal>
  )

}

export default ModalCardContainer
