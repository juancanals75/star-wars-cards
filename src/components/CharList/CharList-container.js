import React from "react"
import CharListView from "./CharList-view"
import ModalCard from "../ModalCard"

class CharListContainer extends React.Component {
  state = {
    showModal: false,
    modalInfo: [],
  }

  displayModal = (name) => {
    // Finds the selected character in the array to pull all info. Needs to be updated to a Unique ID
    const modalInfo = this.props.allPeople.find(currentValue => currentValue.name === name )

    this.setState({
      modalInfo: modalInfo,
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }


  render() {
    const {showModal, modalInfo} = this.state
    return (
      <>
        <ModalCard show={showModal} handleClose={this.handleClose} modalInfo={modalInfo}/>
        <CharListView
          filtered={this.props.filtered}
          displayModal={this.displayModal}
        />
      </>
    )
  }
}

export default CharListContainer
