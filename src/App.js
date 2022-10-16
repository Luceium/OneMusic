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
    //const urlPrefix = "/OneMusic";
    const urlPrefix = "";

  return (
    <div className="App">
        <React.Fragment>
            <NavBar />
        </React.Fragment>
        <Router>
          <div>
              <Routes>
                  <Route exact path={urlPrefix + "/"} element={
                    <React.Fragment>
                        {<HomePage/>}
                    </React.Fragment>
                  }/>
                  <Route exact path={urlPrefix + "/music"} element={<MusicPage/>}/>

                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </div>
      </Router>

    </div>
  );
}

export default App;
