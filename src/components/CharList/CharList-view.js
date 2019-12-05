import React from 'react'
import Character from '../Character'


const CharListView = props => (
  <div className="list-container">
    <div className="list-results">
      {props.filtered.map((charProps) => (
          <Character
            onClick={() => props.displayModal(charProps.name)}
            {...charProps}
          />
        ))
      }
    </div>
  </div>
)

export default CharListView
