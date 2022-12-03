import { GlobalContext } from "../Context/GlobalContext";
import React, { useEffect, useState,  useContext } from "react";
import ReactDOM from "react-dom/client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { Link } from "react-router-dom";


const Planet = () => {
  const ctx = useContext(GlobalContext)

  let filteredPlanet = [];
  
  const favChecker = (name) => {
    const boolean = ctx.starWarsFavorites.some((planet) => planet.name === name);
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
        filteredPlanet = ctx.starWarsPlanet.filter(el => {
          return el.name.toLowerCase().includes(ctx.query.toLowerCase())
        });
      }
      let starWarsPlanetResults = ctx.query ? filteredPlanet : ctx.starWarsPlanet;
  

  return (
    <>


    <div className = "planet-container">{starWarsPlanetResults.map((el, i) => {
      return(
        <div key={i}>

        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR2f4CUJIQhe029aUjIxh96R7l84-6ZQR9H8Ox2ouhXEj-dogdTZ6ERQBxdOIL7pvEd5I7Hq3ngHJb9tvJuloo"
          alt="starwars planet"
        />
  <Link to={`/planet/results/${el.name}`} onClick = {() => { ctx.setStarWarsPlanetLink(el) }} >
    
        <div key={i}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {el.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Climate: {el.climate}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Terrain: {el.terrain}
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
      )
    })}</div>



    </>
    )
}

export default Planet

