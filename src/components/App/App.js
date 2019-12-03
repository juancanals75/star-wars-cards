import React from 'react'
import LoadingScreen from './LoadingScreen'
import CharList from './CharList'

const App = (props) => (
  <main>
    {props.isLoading ?
      <LoadingScreen error={props.fetchError}/> :
      <CharList allPeople={props.data}/>
    }
  </main>
)
export default App
