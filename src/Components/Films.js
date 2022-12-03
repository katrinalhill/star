import { GlobalContext } from "../Context/GlobalContext";

import React, { useEffect, useState, useContext  } from "react";
import ReactDOM from "react-dom/client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import Favorites from "./Favorites";


const Films = () => {

  const ctx = useContext(GlobalContext) 
  
  return (
    <>
    <h3>Films

    <div className ="film-container">{ctx.film.map((el, i) => {
      return(
        <div key={i}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/512/54/54335.png"
          alt="starwars planet"
        />
  
        <div key={i}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title: {el.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Director: {el.director}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Url: {el.url}
            </Typography>
  
                <Button onClick ={()=> ctx.setStarWarsFavoritesFlims([...ctx.starWarsFavoritesFlims, el])} >Add to Favorite</Button>

          </CardContent>
        </div>
      </Card>
      </div>
      )
    })}</div>


    </h3>
    </>
    )
}

export default Films

// onClick ={(event)=>(event)}
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