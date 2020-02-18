import React, {useContext, useState, useEffect} from "react"

import {Context} from "../../utils/Context"
import ListResultsView from "./ListResults-view"


function ListResultsContainer(props) {
  const {searchTxt} = useContext(Context)
  const fullArr = props.data
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    if (searchTxt !== "") {
      const newList = fullArr.filter(item => {
        const itemName = (item.name.toString()).toLowerCase().replace("-", "")
        const searchValue = (searchTxt.toString()).toLowerCase()
        return (itemName.includes(searchValue))
      })
      setFiltered(newList)
    } else {
      setFiltered(fullArr)
    }
  }, [searchTxt, fullArr])

  return (
    <ListResultsView filtered={filtered}/>
  )
}

export default ListResultsContainer
