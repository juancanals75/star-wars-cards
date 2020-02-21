import React, {useContext} from "react"
import Modal from 'react-bootstrap/Modal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from "react-bootstrap/Button"

import {Context} from "../Context"

import ModalCardPeople from "./ModalCard-people"
import ModalCardSpecies from "./ModalCard-species"
import ModalCardPlanets from "./ModalCard-planets"
import ModalCardStarships from "./ModalCard-starships"
import ModalCardVehicles from "./ModalCard-vehicles"

function ModalCardContainer(props) {

  const {displayModal, hideModal, modalInfo, modalCategory, filmsArr} = useContext(Context)

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

  function episodeCheck() {
    let episodesArr = []
    const urlArr = modalInfo.films
    if (urlArr) {
      for (var i = 0; i < urlArr.length; i++) {
        for (var j = 0; j < filmsArr.length; j++) {
          if (urlArr[i] === filmsArr[j].url) {
            episodesArr.push(filmsArr[j].episode_id)
          }
        }
      }
    }

    const episodeDisplay = filmsArr.map(filmObj => {
      for (var i = 0; i < episodesArr.length; i++) {
        if (filmObj.episode_id === episodesArr[i]) {
          return <span className="active-episode">{filmObj.episode_id}</span>
        } else {
          return <span className="disabled-episode">{filmObj.episode_id}</span>
        }
      }
    })
    return episodeDisplay.sort((a, b) => a - b)
  }


  // switch (epId) {
  //   case 1:
  //     return <span className="active-episode">I</span>
  //   case 2:
  //     return <span className="active-episode">II</span>
  //   case 3:
  //     return <span className="active-episode">III</span>
  //   case 4:
  //     return <span className="active-episode">IV</span>
  //   case 5:
  //     return <span className="active-episode">V</span>
  //   case 6:
  //     return <span className="active-episode">VI</span>
  //   case 7:
  //     return <span className="active-episode">VII</span>
  //   default:
  //     break
  //   }

  function buttonCheck(cat) {
    switch (cat) {
      case "pe":
        return <><Button variant="dark">Vehicles</Button><Button variant="dark">Starships</Button></>
      case "sp":
        return (
          <OverlayTrigger
            trigger="click"
            placement="top"
            overlay={
              <Popover id="popover-positioned-top">
                <Popover.Title as="h3">{modalInfo.name} characters</Popover.Title>
                <Popover.Content>
                  <ul>
                    <li>Char 1</li>
                    <li>Char 2</li>
                    <li>Char 3</li>
                  </ul>
                </Popover.Content>
              </Popover>
            }
          >
            <Button variant="dark">{modalInfo.name} Characters</Button>
          </OverlayTrigger>
        )
      case "pl":
        return <Button variant="dark">{modalInfo.name} Characters</Button>
      case "st":
        return <Button variant="dark">{modalInfo.name} Pilots</Button>
      case "ve":
        return <Button variant="dark">{modalInfo.name} Pilots</Button>
      default:
        break
    }
  }

  return (
    <Modal show={displayModal} onHide={hideModal} centered>
      <Modal.Header>
        <Modal.Title>{modalInfo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalAttributes(modalCategory)}
      </Modal.Body>
      <Modal.Footer bsPrefix={`modal-footer ${modalCategory}`}>
        <div className="episodes">
          <h3>episodes</h3>
          <h4>{episodeCheck()}</h4>
        </div>
        <div className="footer-buttons">
          {buttonCheck(modalCategory)}
        </div>
      </Modal.Footer>
    </Modal>
  )

}

export default ModalCardContainer
