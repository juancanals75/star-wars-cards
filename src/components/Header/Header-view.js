import React from "react"
import "./Header.css"
import Logo from "../../assets/images/star-wars-logo.png"

import SearchBar from "../SearchBar"

function HeaderView(props) {
  return (
    <header>
      <img src={Logo} alt="Star Wars Logo"/>
      <div className="header-info">
        <p>This is the intro text where an explanation of the app and the
resources used to build them will be. This is just more placeholder
text to test readability. Final sentence is shorter.</p>
        <SearchBar
          handleChange={props.handleChange}
          searchTxt={props.searchTxt}
        />
      </div>
      <div className="nav-container">
        <h4>NAVIGATION</h4>
      </div>
    </header>

  )
}

export default HeaderView
