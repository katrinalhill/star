import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Favorites from "./Favorites";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import { useNavigate } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

const Character = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  let filteredCharacters = [];

  const favChecker = (name) => {
    const boolean = ctx.starWarsFavorites.some((character) => character.name === name);
    return boolean;
  };

  const addToFavorites = (character) => {
    const oldFavorites = [...ctx.starWarsFavorites];
    const newFavorites = oldFavorites.concat(character);

    ctx.setStarWarsFavorites(newFavorites);
  };

  const removeFromFavorites = (name) => {
    const oldFavorites = [...ctx.starWarsFavorites];
    const newFavorites = oldFavorites.filter(
      (character) => character.name !== name
    );

    ctx.setStarWarsFavorites(newFavorites);
  };

  if (ctx.query) {
    filteredCharacters = ctx.starWarsCharacter.filter((el) => {
      return el.name.toLowerCase().includes(ctx.query.toLowerCase());
    });
  }
  let characterResults = ctx.query ? filteredCharacters : ctx.starWarsCharacter;

  return (
    <>
      <div className="character-container">
        {characterResults.map((el, i) => {
          // console.log(ctx.starWarsCharacter)
          // console.log(el);
          return (
            <div key={i}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653502553714.jpg?width=1920"
                    alt="starwars people "
                    spacing={2}
                  />
              <Link
                to={`/databank/results/${el.name}`}
                onClick={() => {
                  ctx.setStarWarsCharacterLink(el);
                }}
              >
                  <div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {el.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Height: {el.height}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Gender: {el.gender}
                      </Typography>
                    </CardContent>
                  </div>
                  
              </Link>
                  <div>
                    {favChecker(el.name) ? (
                      <Button onClick={() => removeFromFavorites(el.name)}>
                        Remove From Favorite
                      </Button>
                    ) : (
                      <Button onClick={() => addToFavorites(el)}>
                        Add to Favorite
                      </Button>
                      // onClick ={(event)=>(event)}
                    )}
                  </div>
</Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Character;


// https://mui.com/material-ui/guides/routing/

// <Router>
//   <Link component={RouterLink} to="/">
//     With prop forwarding
//   </Link>
//   <br />
//   <Link component={LinkBehavior}>Without prop forwarding</Link>
// </Router>

// <Router>
//   <Link component={RouterLink} to="/">
//     With prop forwarding
//   </Link>
//   <br />
//   <Link component={LinkBehavior}>Without prop forwarding</Link>
// </Router>

/* <div>
{starWarsCharacter.map((el, i) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="starwars people "
      />

      <div key={i}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {el.height}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {el.gender}
          </Typography>

          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardContent>
      </div>
    </Card>
  );
})}
</div> */

// const handleClick= () => {
//   // let query = document.getElementById("search-field").value
//   navigate('/databank/results/', { replace: false });
// };

//onClick =()
//onClick={handleClick}

// onClick={() =>{ctx.setStarWarsCharacterLink(el)}}
