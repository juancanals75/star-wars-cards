import React from 'react'

function LoadingScreen(props) {
  return (
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
}

export default LoadingScreen
