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
      <div onClick={this.props.onClick} className={cardStyle}>
        {this.props.name}
      </div>
    )
  }
}

export default Character
