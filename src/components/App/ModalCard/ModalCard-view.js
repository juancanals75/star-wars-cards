import React from 'react'
import PropTypes from 'prop-types'

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
    <div className="modal">
      <h2>{name}</h2>
      <p>Mass: {mass === "unknown" ? "Unknown" : mass + "Kg"}</p>
      <p>Height: {height === "unknown" ? "Unknown" : height + "cm"}</p>
      <p>Year of birth: {birth_year === "unknown" ? "Unknown" : birth_year}</p>
      <p>Eye color: {eye_color}</p>
      <p>{genderTxt}</p>
      <p>{hairTxt}</p>
      <div className="back-btn" onClick={props.onClick}>BACK</div>
    </div>
  )
}

ModalCard.propTypes = {
  name: PropTypes.string,
  mass: PropTypes.number,
  height: PropTypes.number,
  birth_year: PropTypes.number,
  eye_color: PropTypes.string,
  gender: PropTypes.string,
  hair_color: PropTypes.string
}


export default ModalCard
