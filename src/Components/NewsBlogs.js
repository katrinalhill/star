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
import CharacterDetail from "./CharacterDetail";

const NewsBlogs = () => {
  return (
    <>
    <div>This is the NewsBlogs Page</div>

    </>
  )
}

export default NewsBlogs