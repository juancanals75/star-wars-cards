import React from 'react'
import Character from './Character'

class CharList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
      searchTxt : ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({filtered: this.props.allPeople})
  }

  handleChange(e) {
    this.setState({searchTxt: e.target.value})

    let currentList = []
    let newList = []

    if (e.target.value !== "") {
      currentList = this.props.allPeople
      newList = currentList.filter(item => {
        const currentItem = (item.name.toString()).toLowerCase().replace("-", "")
        const searchValue = e.target.value.toString()
        return (currentItem.includes(searchValue))
      })
    } else {
      newList = this.props.allPeople
    }

    this.setState({ filtered: newList})
  }

  render() {
    const allCharList = this.state.filtered.map(function(charProps, index) { return (<Character key={index} {...charProps} />) })
    return (
      <div className="list-container">
        <div className="list-results">
          {allCharList}
        </div>
        <div className="search">
          <input
          name="search"
          value={this.state.searchTxt}
          onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default CharList
