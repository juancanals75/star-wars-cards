import React from 'react'

const LoadingScreen = (props) => (
  props.error ?
  <h1>ERROR GETTING DATA</h1> :
  <div className="loading-container">
    <h2>Fetching data</h2>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default LoadingScreen
