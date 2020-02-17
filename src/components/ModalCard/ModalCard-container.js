import React, {useContext} from "react"

import {Context} from "../../utils/Context"
import ModalCardView from "./ModalCard-view"

function ModalCardContainer(props) {

  const {displayModal, hideModal, modalInfo} = useContext(Context)

  return (
    <ModalCardView displayModal={displayModal} onHide={hideModal} modalInfo={modalInfo}/>
  )
}

export default ModalCardContainer
