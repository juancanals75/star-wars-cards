import React from 'react'
import PropTypes from 'prop-types'

const Character = (props) => (
  <div onClick={props.onClick} className="character">
    {props.name}
  </div>
)

Character.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Character
