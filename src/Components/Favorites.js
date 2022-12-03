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
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Character from "./Character";

const Favorites = () => {
  const ctx = useContext(GlobalContext);


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


  return (
    <>
      <div className="favorite-container">
        {ctx.starWarsFavorites.length> 0 ?ctx.starWarsFavorites.map((el, i) => {
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
                to={`/favorites`}
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
                    )}
                  </div>
</Card>
            </div>
          );
        }): <h1>Please Add Characters</h1>}


        
      </div>
      <div className="favorite-container">
        {ctx.starWarsFavorites.length> 0 ?ctx.starWarsFavorites.map((el, i) => {
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
                to={`/favorites`}
                onClick={() => {
                  ctx.setStarWarsPlanetLink(el);
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
                    )}
                  </div>
</Card>
            </div>
          );
        }): <h1>Please Add Characters</h1>}


        
      </div>
    </>
  )
  }


export default Favorites;


