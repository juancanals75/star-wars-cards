import {Component} from "react"

class FetchHandler extends Component {

  // GOOGLE SEARCH URL ----> "https://www.googleapis.com/customsearch/v1?key=AIzaSyCYQVI6Msbzsl2zZ2DgIzTXI32vDApd9Gs&cx=007158060221416245727:s9zphajttz8&searchType=image&q="

  state = {
    data: [],
    isLoading: false,
    fetchError: false
  }

  // Fetch if url has multiple pages
  fetchMultiple = (url) => {
    let allFetch = []
    for (let i = 1; i < 10; i++) {
      const fetchUrl = url + i
      allFetch[i-1] = fetch(fetchUrl).then(response => response.json()).then(response => response.results)
    }

    Promise.all(allFetch, {signal: this.abortController.signal}).then(values => {
      this.setState({
        data: values.flat(),
        isLoading: false
      })
    })
    .catch(error => {
      this.setState({fetchError: true})
      console.log(error)
    })
  }

  // Fetch a single URL
  fetchSingle = (url) => {
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        data: data,
        isLoading: false
      })
    })
  }


  componentDidMount() {
    this.setState({isLoading: true})
    this.props.multiple ? this.fetchMultiple(this.props.url) : this.fetchSingle(this.props.url)

  }

  // Make sure to kill fetch to prevent infinte loops
  abortController = new AbortController()
  componentWillUnmount() {
    this.abortController.abort()
  }

  render() {
    const {isLoading, fetchError, data} = this.state
    return (
      this.props.children({isLoading, fetchError, data})
    )
  }
}

export default FetchHandler
