import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

  const [searchTxt, setSearchTxt] = useState("")
  const [charactersArr, setCharactersArr] = useState([])
  // const [speciesArr, setSpeciesArr] = useState([])
  // const [displayModal, setDisplayModal] = useState(false)
  // const [modalInfo, setModalInfo] = useState([])

  function handleChange(e) {
    setSearchTxt(e.target.value)
  }

  // function modalFind() {
  //   const modalInfo = this.props.allPeople.find(currentValue => currentValue.name === name )
  // }

  function updateArr(data, arr) {
    if(arr === "people") {
      const nameArr = data.map(item => item.name)
      setCharactersArr(nameArr)
    }
  }

  // Fetch Multiple pages
  function fetchData(url, arr) {
    let allFetch = []
    for (let i = 1; i < 10; i++) {
      const fetchUrl = url + i
      allFetch[i-1] = fetch(fetchUrl)
        .then(response => response.json())
        .then(response => response.results)
    }

    Promise.all(allFetch)
      .then(values => {
        updateArr(values.flat(), arr)
    })
  }

  return (
    <Context.Provider value={{
      searchTxt,
      handleChange,
      charactersArr,
      fetchData
    }}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}
