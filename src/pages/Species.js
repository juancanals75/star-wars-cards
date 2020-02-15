import React, {useContext} from "react"
import {Context} from "../utils/Context"
import ListResults from "../components/ListResults"

function Characters() {
  const {charactersArr} = useContext(Context)

  return (
    <ListResults data={charactersArr}/>
  )
}

export default Characters
