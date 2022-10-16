import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home";
import MusicPage from "./pages/Music";
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
    //const urlPrefix = "/OneMusic";
    const urlPrefix = "";

  return (
    <div className="App">
        <React.Fragment>
            <NavBar />
        </React.Fragment>
      <HashRouter>
         <Routes>
           <Route exact path="/" name="Home Page" element={<HomePage/>} />
           <Route exact path="/music" name="Music" element={<MusicPage/>} />
         </Routes>
     </HashRouter>

    </div>
  );
}

export default App;
