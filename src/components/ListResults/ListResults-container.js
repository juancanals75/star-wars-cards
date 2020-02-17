import React, {useContext, useState, useEffect} from "react"

import {Context} from "../../utils/Context"
import ListResultsView from "./ListResults-view"


function ListResultsContainer(props) {
  const {searchTxt} = useContext(Context)
  const [filtered, setFiltered] = useState(props.data)


  useEffect(() => {
    if (searchTxt !== "") {
      const newList = filtered.filter(item => {
        const itemName = (item.name.toString()).toLowerCase().replace("-", "")
        const searchValue = (searchTxt.toString()).toLowerCase()
        return (itemName.includes(searchValue))
      })
      setFiltered(newList)
    } else {
      setFiltered(props.data)
    }
  }, [searchTxt, filtered, props.data])

  return (
    <ListResultsView filtered={filtered}/>
  )

}

export default ListResultsContainer
