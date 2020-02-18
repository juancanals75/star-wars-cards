import React, {useContext, useEffect} from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import {Context} from "../utils/Context"
import Header from "./Header"
import ModalCard from "./ModalCard"
import ListResults from "./ListResults"


function App() {
  const {
    fetchData,
    peopleArr,
    speciesArr,
    planetsArr,
    starshipsArr,
    vehiclesArr,
    // filmsArr
  } = useContext(Context)

  useEffect(() => {
    fetchData("people", 9)
    fetchData("species", 4)
    fetchData("planets", 7)
    fetchData("starships", 4)
    fetchData("vehicles", 4)
    fetchData("films", 1)
  }, [])

  return (
    <>
      <Header />
      <ModalCard />
      <Switch>
        <Route exact path="/">
          <Redirect to="/people" />
        </Route>
        <Route path="/people">
          <ListResults data={peopleArr} />
        </Route>
        <Route path="/species">
          <ListResults data={speciesArr} />
        </Route>
        <Route path="/planets">
          <ListResults data={planetsArr} />
        </Route>
        <Route path="/starships">
          <ListResults data={starshipsArr} />
        </Route>
        <Route path="/vehicles">
          <ListResults data={vehiclesArr} />
        </Route>
        <Route path="/films">
          <h1>FILMS</h1>
        </Route>
      </Switch>
    </>
  )
}
export default App
