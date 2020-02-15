import React, {useContext} from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import {Context} from "../utils/Context"
import Header from "./Header"
import LoadingScreen from "./LoadingScreen"
import ListResults from "./ListResults"


function App() {
  const {fetchData, charactersArr} = useContext(Context)
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          {fetchData("https://swapi.co/api/people/?page=", "people")}
          <Redirect to="/characters" />
        </Route>
        <Route path="/characters">
          <ListResults data={charactersArr} />
        </Route>
        <Route path="/species">
          {/* {fetchMultiple(speciesUrl, speciesArr, setSpeciesArr)}
          <ListResults data={speciesArr} /> */}
        </Route>
      </Switch>
    </>
  )
}
export default App
