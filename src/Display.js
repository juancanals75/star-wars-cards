import React from "react"
import LoadingScreen from './LoadingScreen'
import CharList from './CharList'

const Display = (props) => (
  <main>
    {props.isLoading ?
      <LoadingScreen error={props.fetchError}/> :
      <CharList allPeople={props.data}/>
    }
  </main>
)

export default Display
