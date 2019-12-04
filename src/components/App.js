import React from 'react'
import LoadingScreen from './LoadingScreen'
import CharList from './CharList'
import SearchBar from './SearchBar'

const App = (props) => {
  if (props.isLoading) {
    return (
      <LoadingScreen error={props.fetchError}/>
    )
  } else {
    return (
      <>
        <SearchBar
        handleChange={props.handleChange}
        searchTxt={props.searchTxt}
        />
        <CharList allPeople={props.data}/>
      </>
    )
  }
}
export default App
