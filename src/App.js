import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home";
import MusicPage from "./pages/Music";
import SpotifyTest from "./pages/spotifyTest";

import NotFound from './utils/NotFound'
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";
import Feature from './components/feature';

const test = (
    <React.Fragment>
        <h1>hi</h1>
    </React.Fragment>
);

const App = () => {

  return (
    <div className="App">

        <React.Fragment>
            <NavBar />
        </React.Fragment>
      <HashRouter>
         <Routes>
          <Route exact path="/" name="Spotify API page" element={<SpotifyTest/>} />
           <Route exact path="/home" name="Home Page" element={<HomePage/>} />
           <Route exact path="/music" name="Music" element={<MusicPage/>} />
           <Route exact path="/spotifyTest" name="spotifyTest" element={<SpotifyTest/>} />
         </Routes>
     </HashRouter>

    </div>
  );
}

export default App;
