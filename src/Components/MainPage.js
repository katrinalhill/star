import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useNavigate} from "react-router-dom";


const MainPage = () => {
  const ctx = useContext(GlobalContext)  
  const navigate = useNavigate();
  
  const urlPlanets = "https://swapi.dev/api/planets/";
  const urlCharacters= "https://swapi.dev/api/people/";
  const urlfilms = "https://swapi.dev/api/films/";
 
  const urlspecies = "https://swapi.dev/api/species/";
  const urlstarships = "https://swapi.dev/api/starships/";
  const urlvehicles =  "https://swapi.dev/api/vehicles/";

  useEffect(() => {
    ctx.setQuery("")

    fetch(urlCharacters)
      .then(res => res.json())
      .then(data => ctx.setStarWarsCharacter(data.results))
      .catch(err => console.error(err))

    fetch(urlPlanets)
      .then(res => res.json())
      .then(data => ctx.setStarWarsPlanet(data.results))
      .catch(err => console.error(err))

      fetch(urlfilms)
      .then(res => res.json())
      .then(data => ctx.setfilm(data.results))
      .catch(err => console.error(err))

      fetch(urlspecies)
      .then(res => res.json())
      .then(data => ctx.setSpecies(data.results))
      .catch(err => console.error(err))

      fetch(urlstarships)
      .then(res => res.json())
      .then(data => ctx.setStarships(data.results))
      .catch(err => console.error(err))

      fetch(urlvehicles)
      .then(res => res.json())
      .then(data => ctx.setVehicles(data.results))
      .catch(err => console.error(err))



  }, []);
  




  return (
    <div></div>
  )
}

export default MainPage