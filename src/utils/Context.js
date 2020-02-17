import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

  const [searchTxt, setSearchTxt] = useState("")
  const [peopleArr, setPeopleArr] = useState([])
  const [speciesArr, setSpeciesArr] = useState([])
  const [planetsArr, setPlanetsArr] = useState([])
  const [starshipsArr, setStarshipsArr] = useState([])
  const [vehiclesArr, setVehiclesArr] = useState([])
  const [filmsArr, setFilmsArr] = useState([])
  const [displayModal, setDisplayModal] = useState(false)
  const [modalInfo, setModalInfo] = useState([])

  function handleChange(e) {
    setSearchTxt(e.target.value)
  }

  function hideModal() {
    setDisplayModal(false)
  }

  function showModal(url) {
    const category = url[21] + url[22]

    switch (category) {
      case "pe":
        setModalInfo(peopleArr.find(currentValue => currentValue.url === url ))
        break
      case "sp":
        setModalInfo(speciesArr.find(currentValue => currentValue.url === url ))
        break
      case "pl":
        setModalInfo(planetsArr.find(currentValue => currentValue.url === url ))
        break
      case "st":
        setModalInfo(starshipsArr.find(currentValue => currentValue.url === url ))
        break
      case "ve":
        setModalInfo(vehiclesArr.find(currentValue => currentValue.url === url ))
        break
      case "fi":
        setModalInfo(filmsArr.find(currentValue => currentValue.url === url ))
        break
    }
    setDisplayModal(true)
  }

  // Fetch Multiple pages
  function fetchData(arr, pages) {
    let allFetch = []
    for (let i = 1; i < pages+1; i++) {
      const fetchUrl = "https://swapi.co/api/" + arr + "/?page=" + i
      allFetch[i-1] = fetch(fetchUrl)
        .then(response => response.json())
        .then(response => response.results)
    }

    Promise.all(allFetch)
      .then(values => {
        switch (arr) {
          case "people":
            setPeopleArr(values.flat())
            break
          case "species":
            setSpeciesArr(values.flat())
            break
          case "planets":
            setPlanetsArr(values.flat())
            break
          case "starships":
            setStarshipsArr(values.flat())
            break
          case "vehicles":
            setVehiclesArr(values.flat())
            break
          case "films":
            setFilmsArr(values.flat())
            break
        }
    })
  }

  return (
    <Context.Provider value={{
      searchTxt,
      handleChange,
      fetchData,
      peopleArr,
      speciesArr,
      planetsArr,
      starshipsArr,
      vehiclesArr,
      filmsArr,
      modalInfo,
      displayModal,
      hideModal,
      showModal
    }}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}
