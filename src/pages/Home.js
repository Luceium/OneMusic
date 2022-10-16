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
          <ParallaxLayer offset={0} speed={-0.2} style={{ opacity: 0.6 }}>
            <img
              alt="cloud"
              src={require('../assets/youtube.png')}
              style={{ width: "40%", marginLeft: "0%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
            <img
              alt="cloud"
              src={require('../assets/spotify.png')}
              style={{ display: "block", width: "40%", marginLeft: "55%", marginTop: "20%" }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    )
}

export default HomePage;