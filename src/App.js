import React from 'react'
import FetchHandler from "./FetchHandler"
import Header from './Header'
import Display from "./Display"

const App = () => (
  <div>
    <Header />
    <FetchHandler url="https://swapi.co/api/people/?page=" multiple={true}>
      {({isLoading, fetchError, data}) => (
        <Display
          isLoading={isLoading}
          fetchError={fetchError}
          data={data}
        />
      )}
    </FetchHandler>
  </div>
)
export default App
