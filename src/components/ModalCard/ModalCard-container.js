import React, {useContext} from "react"
import Modal from "react-bootstrap/Modal"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from 'react-bootstrap/Button'

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
    let activeEpisodesArr = []
    const urlArr = modalInfo.films
    if (urlArr) {
      for (var i = 0; i < urlArr.length; i++) {
        for (var j = 0; j < filmsArr.length; j++) {
          if (urlArr[i] === filmsArr[j].url) {
            activeEpisodesArr.push(filmsArr[j].episode_id)
          }
        }
      }
    }

    let orderedEpisodes = filmsArr.map(filmObj => filmObj.episode_id)
    orderedEpisodes = orderedEpisodes.sort()

    const episodeDisplay = orderedEpisodes.map(filmId => {
      const romanEpisode = () => {switch (filmId) {
        case 1:
          return "I"
        case 2:
          return "II"
        case 3:
          return "III"
        case 4:
          return "IV"
        case 5:
          return "V"
        case 6:
          return "VI"
        case 7:
          return "VII"
        default:
          break
        }}
      if (activeEpisodesArr.includes(filmId)) {
        return <span className="active">{romanEpisode()}</span>
      }
      return <span className="disabled">{romanEpisode()}</span>
    })

    return episodeDisplay
  }


  function buttonCheck(cat) {
    switch (cat) {
      case "pe":
        return (
          <ButtonGroup toggle={true}>
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Title as="h3">Vehicles piloted by {modalInfo.name}</Popover.Title>
                  <Popover.Content>
                    <ul>
                      <li>VEHICLES 1</li>
                      <li>VEHICLES 2</li>
                      <li>VEHICLES 3</li>
                    </ul>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="dark">Vehicles</Button>
            </OverlayTrigger>
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Title as="h3">Starships piloted by {modalInfo.name}</Popover.Title>
                  <Popover.Content>
                    <ul>
                      <li>STARSHIPS 1</li>
                      <li>STARSHIPS 2</li>
                      <li>STARSHIPS 3</li>
                    </ul>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="dark">Starships</Button>
            </OverlayTrigger>
          </ButtonGroup>
            )
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
          <div className="episode-list">{episodeCheck()}</div>
        </div>
        <div className="footer-buttons">
          {buttonCheck(modalCategory)}
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCardContainer
