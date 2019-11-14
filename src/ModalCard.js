import React from 'react'

function ModalCard(props) {
  const {name, mass, height, birth_year, eye_color, gender, hair_color} = props.modalInfo
  let genderTxt
  let hairTxt
  if (gender === "none") {
    genderTxt = "No Gender"
  } else if (gender === "n/a") {
    genderTxt = "Gender: Unknown"
  } else {
    genderTxt = "Gender: " + gender
  }

  if (hair_color === "none") {
    hairTxt = "No Hair"
  } else if (hair_color === "n/a") {
    hairTxt = "Hair Color: Unknown"
  } else {
    hairTxt = "Hair Color: " + hair_color
  }
  return (
    <div className="modal">
      <h2>{name}</h2>
      <p>Mass: {mass === "unknown" ? "Unknown" : mass + "Kg"}</p>
      <p>Height: {height === "unknown" ? "Unknown" : height + "cm"}</p>
      <p>Year of birth: {birth_year === "unknown" ? "Unknown" : birth_year}</p>
      <p>Eye color: {eye_color}</p>
      <p>{genderTxt}</p>
      <p>{hairTxt}</p>
      <button onClick={props.onClick}>Back to the list</button>
    </div>
  )
  // return (
  //   <h2>MODAL TEST</h2>
  // )
}


export default ModalCard
