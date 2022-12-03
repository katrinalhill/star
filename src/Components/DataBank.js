import React, { useContext } from "react";
import { Icon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Character from './Character';
import Planet from './Planet';
import { useNavigate} from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";



const DataBank = () => {
  const ctx = useContext(GlobalContext)
  const navigate = useNavigate();

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
    <div>
      <input type="text" placeholder="Search DataBank"  onKeyUp={handleKeyUp}></input>
      <button onClick={handleClick} ><SearchIcon></SearchIcon>Search</button>
    </div>
    <Character/>
    <Planet/>
    </>
  )
}

export default DataBank