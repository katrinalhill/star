import React, { useState, createContext } from "react";

const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [starWarsCharacter, setStarWarsCharacter] = useState([]);

  const [starWarsPlanet, setStarWarsPlanet] = useState([]);
  const [query, setQuery] = useState([]);
  const [starhips, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [film, setfilm] = useState([]);
  
  const [starWarsCharacterLink, setStarWarsCharacterLink] = useState({name: "", height: "", gender: "", hair_color: "", eye_color: ""});
  const [ starWarsPlanetLink  ,   setStarWarsPlanetLink] = useState({climate: "",created: "",diameter: "",edited: ""});
  const [ starWarsFavorites  ,   setStarWarsFavorites] = useState([]);
  const [ starWarsFavoritesPlanet  ,   setStarWarsFavoritesPlanet] = useState([]);
  const [ starWarsFavoritesFlims  ,   setStarWarsFavoritesFlims] = useState([]);

  const ctx = {
    starWarsCharacter,
    setStarWarsCharacter,
    starWarsPlanet,
    setStarWarsPlanet,
    query,
    setQuery,
    starhips,
    setStarships,
    vehicles,
    setVehicles,
    species,
    setSpecies,
    film, 
    setfilm,
    starWarsCharacterLink,
    setStarWarsCharacterLink,
    starWarsPlanetLink,
    setStarWarsPlanetLink,
    starWarsFavorites,
    setStarWarsFavorites,
    starWarsFavoritesPlanet,
    setStarWarsFavoritesPlanet,
    starWarsFavoritesFlims,
    setStarWarsFavoritesFlims
  }

  return (
    <GlobalContext.Provider value={ctx}>
      {children}
    </GlobalContext.Provider>
  )

};

export { ContextProvider, GlobalContext };