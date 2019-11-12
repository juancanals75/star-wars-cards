import React from 'react'
import Character from './Character'

function CharList(props) {

  const allCharList = props.allPeople

  return (
    <div className="list-container">{allCharList.map(function(value) {
      return (
        <Character {...value} />
      )
    })}
  </div>
  )
}

export default CharList
