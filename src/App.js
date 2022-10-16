import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home";
import MusicPage from "./pages/Music";
import NotFound from './utils/NotFound'
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";

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
                  <Route exact path={"/music"} element={<MusicPage/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </div>
      </Router>

    </div>
  );
}

export default App;
