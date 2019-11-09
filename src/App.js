import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allPeople: [],
      isLoading: false
    }
  }

  componentDidMount() {
    let allFetch = []
    this.setState({isLoading: true})
    for (let i = 1; i < 10; i++) {
      const fetchUrl = "https://swapi.co/api/people/?page=" + i
      allFetch[i-1] = fetch(fetchUrl).then(response => response.json()).then(response => response.results)
    }

    Promise.all(allFetch).then(values => {
      this.setState({
        allPeople: values.flat(),
        isLoading: false
      })
    })
  }

  render() {
    let loadCheck

    if(this.state.isLoading) {
      loadCheck = <h1>LOADING</h1>
    } else {
      loadCheck = <h1>LOADED</h1>
    }

    return (
      <div>
        <main>{loadCheck}</main>
      </div>
    )
  }
}

export default App;
