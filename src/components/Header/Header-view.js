import React from "react"
import {NavLink} from "react-router-dom"

import "./Header.css"

import Logo from "../../assets/images/star-wars-logo.png"
import PeopleIcon from "../../assets/images/people-icon.png"
import SpeciesIcon from "../../assets/images/species-icon.png"
import PlanetsIcon from "../../assets/images/planets-icon.png"
import StarshipsIcon from "../../assets/images/starships-icon.png"
import VehiclesIcon from "../../assets/images/vehicles-icon.png"
import FilmsIcon from "../../assets/images/films-icon.png"

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
        <NavLink to="/people" className="pe">
          <div className="nav-box">
            <div className="icon-container">
              <img src={PeopleIcon} alt="People Icon"/>
            </div>
            <span>PEOPLE</span>
          </div>
        </NavLink>
        <NavLink to="/species"  className="sp">
          <div className="nav-box">
            <div className="icon-container">
              <img src={SpeciesIcon} alt="Species Icon"/>
            </div>
            <span>SPECIES</span>
          </div>
        </NavLink>
        <NavLink to="/planets"  className="pl">
          <div className="nav-box">
            <div className="icon-container">
              <img src={PlanetsIcon} alt="Planets Icon"/>
            </div>
            <span>PLANETS</span>
          </div>
        </NavLink>
        <NavLink to="/starships"  className="st">
          <div className="nav-box">
            <div className="icon-container">
              <img src={StarshipsIcon} alt="Starships Icon"/>
            </div>
            <span>STARSHIPS</span>
          </div>
        </NavLink>
        <NavLink to="/vehicles"  className="ve">
          <div className="nav-box">
            <div className="icon-container">
              <img src={VehiclesIcon} alt="Vehicles Icon"/>
            </div>
            <span>VEHICLES</span>
          </div>
        </NavLink>
        <NavLink to="/films"  className="fi">
          <div className="nav-box">
            <div className="icon-container">
              <img src={FilmsIcon} alt="Films Icon"/>
            </div>
            <span>FILMS</span>
          </div>
        </NavLink>
      </div>
    </header>
  )
}

export default HeaderView
