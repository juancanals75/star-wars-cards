import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './LoadingScreen.css'

const LoadingScreen = (props) => (
  <div className="loading-container">
    <h2>Fetching data</h2>
    <Spinner animation="border" variant="light" />
  </div>
)

export default LoadingScreen
