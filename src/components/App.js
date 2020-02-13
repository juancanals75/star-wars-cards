import React, {useState} from 'react'
import Header from "./Header"
import CharList from './CharList'

import FetchHandler from "../utils/FetchHandler"

function App(props) {
  const [searchTxt, setSearchTxt] = useState("")
  const [filtered, setFiltered] = useState([])

  function handleChange(e) {
    setSearchTxt(e.target.value)

    let currentList = []
    let newList = []

    if (e.target.value !== "") {
      currentList = props.data
      newList = currentList.filter(item => {
        const currentItem = (item.name.toString()).toLowerCase().replace("-", "")
        const searchValue = (e.target.value.toString()).toLowerCase()
        return (currentItem.includes(searchValue))
      })
    } else {
      newList = props.data
    }

    setFiltered(newList)
  }

  return (
    <>
      <Header handleChange={handleChange} searchTxt />
      <FetchHandler url="https://swapi.co/api/people/?page=" multiple={true}>
        {({data}) => (
          <main>
            <CharList
              allPeople={data}
              filtered={filtered}
            />
          </main>
        )}
      </FetchHandler>
    </>
  )
}
export default App
