import React from 'react'
import ModalCard from '../ModalCard'
import Character from '../Character'


const CharList = props => (
  <div className="list-container">
    
    <ModalCard
      onClick={props.displayList}
      modalInfo={props.modalInfo}
    />
    {props.showList && (
      props.filtered.map((charProps, index) => (
        <Character
          onClick={() => props.displayModal(charProps.name)}
          {...charProps}
        />
      ))
    )}
  </div>
)

export default CharList
