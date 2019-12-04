import React from 'react'

const Character = (props) => (
  <div onClick={props.onClick} className="character">
    {props.name}
  </div>
)

export default Character
