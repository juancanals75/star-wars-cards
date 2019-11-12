import React from 'react'

function Character(props)  {
  return (
    <div className="character">
      <h3 className="name">{props.name}</h3>
    </div>
  )
}

export default Character
