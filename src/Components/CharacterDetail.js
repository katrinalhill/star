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

import { useNavigate} from "react-router-dom";
import Character from "./Character";
// const [starWarsCharacterLink, setStarWarsCharacterLink] = useState({name: "", height: "", gender: "", hair_color: "", eye_color: ""});




const CharacterDetail = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  // console.log(ctx.starWarsCharacter)

  // key={i}

  return (
    <>
      <div className = "character-detail-container">

            <div >

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/id/585592844/photo/toned-portrait-of-darth-vader-mask-and-helmet.jpg?s=612x612&w=0&k=20&c=jbKKdJpD8lnQbiO_7FnOUBtliiKt_9Nuo3OrZPUl5lU="
                    alt="starwars people "
                    spacing={2}
                  />

                  <div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {ctx.starWarsCharacterLink.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Height: {ctx.starWarsCharacterLink.height}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Gender: {ctx.starWarsCharacterLink.gender}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Eye Color: {ctx.starWarsCharacterLink.eye_color}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Hair Color: {ctx.starWarsCharacterLink.hair_color}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>

              </div>

      </div>
    </>
  );
}

export default CharacterDetail

/* <Link to={`/databank/results/${i}`} onClick={handleClick} >
                
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653502553714.jpg?width=1920"
                    alt="starwars people "
                    spacing={2}
                  />

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
                      <Typography gutterBottom variant="h5" component="div">
                        Mass: {el.mass}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Hair Color: {el.hair_color}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Hair Color: {el.skin_color}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
            </Link> */

            // const handleClick = () =>{
            //   ctx.starWarsCharacter((el, i) => {
            //     console.log(el)
            //   })}
          
          
          //   const handleClick= () => {
          //     ctx.starWarsCharacter((el, i) => {
          //       console.log(el)
          // //  if ("the ids match then go here"){
          // //   // navigate(`/databank/results/${i}`, { replace: false });
          // //  }
              
          //    }) };