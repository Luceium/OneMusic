import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
  return (
    <div className="App">
        <React.Fragment>
            <NavBar />
        </React.Fragment>
        <Router>
          <div>
              <Routes>
                  <Route exact path={"/"} element={<HomePage/>}/>
                  <Route exact path={"/test"} element={test}/>
                  <Route exact path={"/music"} element={<MusicPage/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </div>
        </Router>
        <React.Fragment>
            <Footer />
        </React.Fragment>
    </div>
  );
}

export default App;
