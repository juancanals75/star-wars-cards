import React, {useState} from 'react'
import LoadingScreen from './LoadingScreen'
import CharList from './CharList'
import SearchBar from './SearchBar'

const App = (props) => {
  const [searchTxt, setSearchTxt] = useState("")
  const [filtered, setFiltered] = useState(props.data)

  const handleChange = (e) => {
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
      <SearchBar
        handleChange={handleChange}
        searchTxt={searchTxt}
      />
      <CharList
        allPeople={props.data}
        filtered={filtered}
      />
    </>
  )
}
export default App
