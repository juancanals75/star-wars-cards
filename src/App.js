import React from 'react'
import LoadingScreen from './LoadingScreen'
import Header from './Header'
import CharList from './CharList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allPeople: [],
      isLoading: false,
      fetchError: false
    }
  }

  abortController = new AbortController()

  componentDidMount() {
    let allFetch = []
    this.setState({isLoading: true})
    for (let i = 1; i < 10; i++) {
      const fetchUrl = "https://swapi.co/api/people/?page=" + i
      allFetch[i-1] = fetch(fetchUrl).then(response => response.json()).then(response => response.results)
    }

    Promise.all(allFetch, {signal: this.abortController.signal}).then(values => {
      this.setState({
        allPeople: values.flat(),
        isLoading: false
      })
    })
    .catch(error => {
      this.setState({fetchError: true})
      console.log(error)
    })
  }

  componentWillUnmount() {
    this.abortController.abort()
  }

  render() {
    let loadCheck

    if (this.state.isLoading && !this.state.fetchError) {
      loadCheck = <LoadingScreen />
    } else if (this.state.fetchError) {
      loadCheck = <h2>FAILED TO FETCH DATA</h2>
    } else {
      loadCheck = <CharList allPeople={this.state.allPeople}/>
    }

    return (
      <div>
        <Header />
        <main>{loadCheck}</main>
      </div>
    )
  }
}

export default App;
