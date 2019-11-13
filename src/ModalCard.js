import React from 'react'

function ModalCard(props) {
  const {name, mass, height, birth_year, eye_color, gender, hair_color} = props.modalInfo
  return (
    <div className="modal">
      <h2>{name}</h2>
      <p>Mass: {mass}Kg</p>
      <p>Height: {height}cm</p>
      <p>Year of birth: {birth_year}</p>
      <p>Eye color: {eye_color}</p>
      <p>Gender: {gender}</p>
      <p>Hair color: {hair_color}</p>
      <button onClick={props.onClick}>Back to the list</button>
    </div>
  )
  // return (
  //   <h2>MODAL TEST</h2>
  // )
}


export default ModalCard
