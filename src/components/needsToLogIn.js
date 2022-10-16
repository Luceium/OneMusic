import React from "react";
import '../styles/home.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function needsToLogIn() {
  if (localStorage.getItem("spotifyToken") == null){
      return (<p style={{ fontFamily: "Roboto Mono, sans-serif", color: "#00008b", textAlign: "center" }}>you still need to log in!</p>);
  }
}

export default needsToLogIn;
