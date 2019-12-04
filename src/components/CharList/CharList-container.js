import React from "react"
import CharList from "./CharList-view"

class CharListContainer extends React.Component {
  state = {
    filtered: [],
    searchTxt : "",
    showModal: false,
    showList: true,
    modalInfo: []
  }

  componentDidMount() {
    this.setState({filtered: this.props.allPeople})
  }

  displayModal = (name) => {
    // Finds the selected character in the array to pull all info. Needs to be updated to a Unique ID
    const modalInfo = this.props.allPeople.find(currentValue => currentValue.name === name )

    this.setState({
      modalInfo: modalInfo,
      showList: false
    })
    setTimeout(() => this.setState({showModal: true}), 400)
  }

  displayList = () => {
    this.setState({
      showModal: false
    })
    setTimeout(() => this.setState({showList: true}), 400)
  }

  handleChange = (e) => {
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
    const {filtered, searchTxt, showModal, showList, modalInfo} = this.state
    return (
      <CharList
        filtered={filtered}
        searchTxt={searchTxt}
        showModal={showModal}
        showList={showList}
        modalInfo={modalInfo}
        handleChange={this.handleChange}
        displayModal={this.displayModal}
        displayList={this.displayList}
      />
    )
  }
}

export default CharListContainer
