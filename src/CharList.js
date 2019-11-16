import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import ModalCard from './ModalCard'
import SearchBar from './SearchBar'
import Character from './Character'

class CharList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
      searchTxt : "",
      showModal: false,
      modalInfo: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.showModal = this.showModal.bind(this)
    this.showList = this.showList.bind(this)
  }

  componentDidMount() {
    this.setState({filtered: this.props.allPeople})
  }

  showModal(name) {

    const modalInfo = this.props.allPeople.find(currentValue => currentValue.name === name )

    this.setState({
      showModal: true,
      modalInfo: modalInfo
    })
  }

  showList() {
    this.setState({showModal: false})
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
    return (
      <div className="list-container">
        <SearchBar
          handleChange={this.handleChange}
          searchTxt={this.state.searchTxt}
        />
        <CSSTransition
          in={this.state.showModal}
          unmountOnExit
          timeout={500}
          classNames="fade"
        >
          <ModalCard
            onClick={() => this.setState({showModal: false})}
            modalInfo={this.state.modalInfo}
          />
        </CSSTransition>
        <div className="list-results">
          {this.state.filtered.map((charProps, index) => (
            <CSSTransition
              in={!this.state.showModal}
              timeout={500}
              classNames="fade"
              unmountOnExit
              key={index}
            >
              <Character
                onClick={() => this.showModal(charProps.name)}
                {...charProps}
              />
            </CSSTransition>
          ))}
        </div>
      </div>
    )
  }
}

export default CharList
