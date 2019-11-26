import React from 'react'
import FetchHandler from "./FetchHandler"
import LoadingScreen from './LoadingScreen'
import Header from './Header'
import CharList from './CharList'

const App = () => (
  <div>
    <Header />
    <FetchHandler url="https://swapi.co/api/people/?page=" multiple={true}>
      {({isLoading, fetchError, data}) => (
        <main>
          {isLoading ? <LoadingScreen error={fetchError} /> :
          <CharList allPeople={data}/>}
        </main>
      )}
    </FetchHandler>
  </div>
)
export default App
