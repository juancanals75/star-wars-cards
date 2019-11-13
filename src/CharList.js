import React from 'react'
import ModalCard from './ModalCard'
import SearchBar from './SearchBar'
import Character from './Character'

class CharList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
      searchTxt : "",
      selected: false,
      modalInfo: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({filtered: this.props.allPeople})
  }

  handleClick(name) {

    const modalInfo = this.props.allPeople.find(currentValue => currentValue.name === name )

    this.setState(prevState => ({
      selected: !prevState.selected,
      modalInfo: modalInfo
    }))
  }

  handleChange(e) {
    this.setState({searchTxt: e.target.value})

    let currentList = []
    let newList = []

    if (e.target.value !== "") {
      currentList = this.props.allPeople
      newList = currentList.filter(item => {
        const currentItem = (item.name.toString()).toLowerCase().replace("-", "")
        const searchValue = (e.target.value.toString()).toLowerCase()
        return (currentItem.includes(searchValue))
      })
    } else {
      newList = this.props.allPeople
    }

    this.setState({ filtered: newList})
  }

  render() {
    const click = this.handleClick
    const allCharList = this.state.filtered.map((charProps, index) => <Character onClick={() => this.handleClick(charProps.name)} key={index} {...charProps} /> )

    if (this.state.selected) {
      return (
        <ModalCard onClick={click} modalInfo={this.state.modalInfo} />
      )
    } else {
      return (
        <div className="list-container">
          <SearchBar handleChange={this.handleChange} searchTxt={this.state.searchTxt} />
          <div className="list-results">
            {allCharList}
          </div>
        </div>
      )
    }
  }
}

export default CharList
