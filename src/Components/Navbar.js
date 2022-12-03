import React from 'react'
import { useEffect, useContext } from "react";
import {  Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const Navbar = () => {
  const ctx = useContext(GlobalContext)  
  const resetQuery = () => {
    ctx.setQuery('')
};

  return (
    <>
    <div className ="navbar-container">
      <ol className = "navbar-list">
        <ul className = "navbar-ul" style ={{color: "blue "}}>
    <li>
       <Link to={`/news`}>NEWS+BLOGS</Link>
    </li>
    <li>
    <Link to={`/video`}>VIDEO</Link>
    </li>
    <li>
    <Link onClick={resetQuery} to={`/films`}>FLIMS</Link>

    </li>
    <li>
    <Link onClick={resetQuery} to={`/series`}>SERIES</Link>

    </li>
    <li>
    <Link onClick={resetQuery} to={`/interactive`}>INTERACTIVE</Link>
      
    </li>
    <li>
    <Link onClick={resetQuery} to={`/community`}>COMMUNITY</Link>
      
    </li>
    <li>
    <Link onClick={resetQuery} to={`/databank`}>DATABANK</Link>

    </li>
    <li>
    <Link onClick={resetQuery} to={`/disney+`}>DISNEY+</Link>
      
    </li>
    <li>
    <Link to={`/favorites`}>YOUR FAVORITES</Link>
      
    </li>
    </ul>
    </ol>
    </div>

    <div className ="header-text-container">
    <h3 className ="header-text">ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY +</h3>
    </div>
    </>
  )
  
}

export default Navbar