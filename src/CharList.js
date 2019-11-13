import React from 'react'
import ModalCard from './ModalCard'
import Character from './Character'

class CharList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
      searchTxt : "",
      selected: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({filtered: this.props.allPeople})
  }

  handleClick(e) {
    this.setState(prevState => ({
      selected: !prevState.selected
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
    const allCharList = this.state.filtered.map(function(charProps, index) { return (<Character onClick={click} key={index} {...charProps} />) })
    const modalDisplay = this.state.selected ? <ModalCard onClick={click} /> : allCharList
    return (
      <div className="list-container">
        {modalDisplay}
      </div>
    )
    // return (
    //   <div className="list-container">
    //     <div className="search">
    //       <input
    //         name="search"
    //         value={this.state.searchTxt}
    //         placeholder="Search by name"
    //         onChange={this.handleChange}
    //       />
    //     </div>
    //     <div className="list-results">
    //       {allCharList}
    //     </div>
    //   </div>
    // )
  }
}

export default CharList
