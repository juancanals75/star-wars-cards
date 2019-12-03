import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ModalCard from '../ModalCard'
import SearchBar from '../SearchBar'
import Character from '../Character'

const CharList = props => (
  <div className="list-container">
    <SearchBar
      handleChange={props.handleChange}
      searchTxt={props.searchTxt}
    />
    <CSSTransition
      in={props.showModal}
      unmountOnExit
      timeout={500}
      onExited={props.displayList}
      classNames="fade"
    >
      <ModalCard
      onClick={props.displayList}
      modalInfo={props.modalInfo}
      />
    </CSSTransition>
    <TransitionGroup className="list-results">
      {props.showList && (
        props.filtered.map((charProps, index) => (
          <CSSTransition
            timeout={500}
            classNames="fade"
            unmountOnExit
            key={index}
          >
            <Character
              onClick={() => props.displayModal(charProps.name)}
              {...charProps}
            />
          </CSSTransition>
        ))
      )}
    </TransitionGroup>
  </div>
)

export default CharList
