import React, {useContext, useEffect} from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import {Context} from "./Context"

import LoadingScreen from "./LoadingScreen"
import Header from "./Header"
import ModalCard from "./ModalCard"
import ListResults from "./ListResults"
import FilmsList from "./FilmsList"


function App() {
  const {
    isLoading,
    fetchData,
    peopleArr,
    speciesArr,
    planetsArr,
    starshipsArr,
    vehiclesArr,
    filmsArr
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
          {isLoading ? <LoadingScreen /> : <Redirect to="/people" />}
        </Route>
        <Route path="/people">
          <ListResults data={peopleArr} cat="pe" />
        </Route>
        <Route path="/species">
          <ListResults data={speciesArr} cat="sp"/>
        </Route>
        <Route path="/planets">
          <ListResults data={planetsArr} cat="pl"/>
        </Route>
        <Route path="/starships">
          <ListResults data={starshipsArr} cat="st"/>
        </Route>
        <Route path="/vehicles">
          <ListResults data={vehiclesArr} cat="ve"/>
        </Route>
        <Route path="/films">
          <FilmsList data={filmsArr} cat="fi"/>
        </Route>
      </Switch>
    </>
  )
}
export default App
