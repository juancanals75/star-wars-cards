import React from 'react'
import './Character.css'

const Character = (props) => (
  <div onClick={props.onClick} className="character">
    {props.name}
  </div>
)

export default Character
