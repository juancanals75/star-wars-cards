import React from "react"

import "./FilmsList.css"

import AttackPoster from "../../assets/images/attack-clones-poster.jpg"
import EmpirePoster from "../../assets/images/empire-strikes-back-poster.jpg"
import ForcePoster from "../../assets/images/force-awakens-poster.jpg"
import HopePoster from "../../assets/images/new-hope-poster.jpg"
import PhantomPoster from "../../assets/images/phantom-menace-poster.jpg"
import ReturnPoster from "../../assets/images/return-jedi-poster.jpg"
import RevengePoster from "../../assets/images/revenge-sith-poster.jpg"

function FilmsListView({data}) {
  return (
    <div className="films-container">
      <div className="poster">
        <img src={PhantomPoster} alt="Phantom Menace - Movie Poster"/>
      </div>
      <div className="poster">
        <img src={AttackPoster} alt="Attack of the Clones - Movie Poster"/>
      </div>
      <div className="poster">
        <img src={RevengePoster} alt="Revenge of the Sith - Movie Poster"/>
      </div>
      <div className="poster">
        <img src={HopePoster} alt="A New Hope - Movie Poster"/>
      </div>
      <div className="poster">
        <img src={EmpirePoster} alt="Empire Strikes Back - Movie Poster"/>
      </div>
      <div className="poster">
        <img src={ReturnPoster} alt="Return of the Jedi - Movie Poster"/>
      </div>
      <div className="poster">
        <img src={ForcePoster} alt="The Force Awakens - Movie Poster"/>
      </div>
    </div>
  )
}

export default FilmsListView
