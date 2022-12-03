import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useNavigate} from "react-router-dom";
import Character from './Character';
import Planet from './Planet';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const ctx = useContext(GlobalContext)
  const navigate = useNavigate();

  const resetQuery = () => {
    ctx.setQuery('')
};


  const handleClick= () => {
    // let query = document.getElementById("search-field").value
    navigate('/results', { replace: false });
  };

  const handleKeyUp = (e) => {
    ctx.setQuery(e.target.value)
    console.log(ctx.query)


  };

  return (
    <>
    <div className ="header-container">
      <ol className ="social-links">
        <ul>
        <a href="https://www.facebook.com/StarWars" className="fa fa-facebook"></a>
       </ul>
       <ul>
      <a href="https://www.instagram.com/starwars/" className="fa fa-instagram"></a>
       </ul>
       <ul>
       <a href="https://twitter.com/starwars"  className="fa fa-twitter"></a>       
       </ul>
       <a href="https://www.youtube.com/user/starwars"className="fa fa-youtube"></a> 
      </ol>
     
      <h1 className= "main-title" >STAR WARS</h1>
      
      <div className= "search-container">
      <div className = "header-searchbar">
      <input type="text" placeholder="Search Star Wars" onKeyUp={handleKeyUp} ></input>
      <button onClick={handleClick} ><SearchIcon></SearchIcon></button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header
