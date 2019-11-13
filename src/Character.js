import React from 'react'

class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expand: false
    }
    this.expandInfo = this.expandInfo.bind(this)
  }

  expandInfo(e) {
    this.setState(state => ({
      expand: !state.expand
    }));
  }

  render() {
    const infoShow = this.state.expand ? "block" : "none"
    const cardStyle = this.state.expand ? "character selected" : "character"
    return (
      <div onClick={this.expandInfo} className={cardStyle}>
        <h3 className="name">{this.props.name}</h3>
        <div className="extra-info">
          <p style={{display: infoShow}}>Birth Year</p>
          <p style={{display: infoShow}}>Gender</p>
          <p style={{display: infoShow}}>Hair</p>
          <p style={{display: infoShow}}>height</p>
          <p style={{display: infoShow}}>MASS</p>
          <p style={{display: infoShow}}>Skin color</p>
          <p style={{display: infoShow}}>Homeworld</p>
          <p style={{display: infoShow}}>Films</p>
          <p style={{display: infoShow}}>Specie</p>
          <p style={{display: infoShow}}>Starship</p>
          <p style={{display: infoShow}}>Vehicle</p>
        </div>
      </div>
    )
  }
}

export default Character
