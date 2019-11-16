import React from 'react'

export default function Character(props) {
  return (
      <div onClick={props.onClick} className="character">
        {props.name}
      </div>
  )
}
