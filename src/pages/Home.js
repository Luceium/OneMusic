import React from "react";
import '../styles/home.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function HomePage() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute"
        }}
      >
        <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={-0.4} style={{ opacity: 0.6 }}>
            <img
              alt="youtube"
              src={require('../assets/youtube.png')}
              style={{ width: "40%", marginLeft: "0%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
            <img
              alt="spotify"
              src={require('../assets/spotify.png')}
              style={{ display: "block", width: "40%", marginLeft: "55%", marginTop: "20%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-0.1} style={{ opacity: 1 }}>
          <h1
            style={{ marginTop: "35vh", fontSize: "102px", fontWeight: "900" }}
          >ONEMUSIC</h1>
            <p
              style={{ fontFamily: "Roboto Mono, sans-serif", color: "#00008b" }}
            >your music combo hotspot</p>
          </ParallaxLayer>
        </Parallax>
      </div>
    )
}

export default HomePage;
