import React from "react"
import {Link} from "react-router-dom"

import "./Header.css"
import Logo from "../../assets/images/star-wars-logo.png"

import SearchBar from "../SearchBar"

function HeaderView(props) {
  return (
    <header>
      <img className="header-logo" src={Logo} alt="Star Wars Logo"/>
      <div className="header-info">
        <p>This is the intro text where an explanation of the app and the
resources used to build them will be. This is just more placeholder
text to test readability. Final sentence is shorter.</p>
        <SearchBar />
      </div>
      <div className="nav-container">
        <Link to="/people">
          <div className="nav-box">PEOPLE</div>
        </Link>
        <Link to="/species">
          <div className="nav-box">SPECIES</div>
        </Link>
        <Link to="/planets">
          <div className="nav-box">PLANETS</div>
        </Link>
        <Link to="/starships">
          <div className="nav-box">STARSHIPS</div>
        </Link>
        <Link to="/vehicles">
          <div className="nav-box">VEHICLES</div>
        </Link>
        <Link to="/films">
          <div className="nav-box">FILMS</div>
        </Link>
      </div>
    </header>

  )
}

export default HeaderView
