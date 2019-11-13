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
    const expandedModal = this.state.expand ? <div>EXPANDED</div> : null
    return (
      <div onClick={this.expandInfo} className="character">
        <h3 className="name">{this.props.name}</h3>
        <div>{expandedModal}</div>
      </div>
    )
  }
}

export default Character
