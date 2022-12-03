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
import { useNavigate} from "react-router-dom";




const PlanetDetails = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  console.log(ctx.starWarsPlanetLink)

  // key={i}

  return (
    <>
      <div>

            <div >

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/id/1295851454/photo/earth-and-solar-system-planets.jpg?b=1&s=170667a&w=0&k=20&c=MvTxuhzjrk39h_-KH_Zj6xwRGRS1oBmMp9TB79cgP4o="
                    alt="starwars people "
                    spacing={2}
                  />

                  <div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {ctx.starWarsPlanetLink.climate}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Height: {ctx.starWarsPlanetLink.created}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Gender: {ctx.starWarsPlanetLink.diameter}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Eye Color: {ctx.starWarsPlanetLink.edited}
                      </Typography>

                    </CardContent>
                  </div>
                </Card>

              </div>

      </div>
    </>
  );
}

export default PlanetDetails