import React from 'react'

function ModalCard(props) {
  console.log(props.modalInfo)
  const {name, mass, height, birth_year, eye_color, gender, hair_color} = props.modalInfo
  return (
    <div onClick={props.onClick} className="modal">
      <h2>{name}</h2>
      <p>Mass: {mass}Kg</p>
      <p>Height: {height}cm</p>
      <p>Year of birth: {birth_year}</p>
      <p>Eye color: {eye_color}</p>
      <p>Gender: {gender}</p>
      <p>Hair color: {hair_color}</p>
    </div>
  )
}


export default ModalCard
