import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home";
import MusicPage from "./pages/Music";

const App = () => {
  return (
    <div className="App">
        <React.Fragment>
            <NavBar />
        </React.Fragment>
      <Router>
          <div>
              <Routes>
                  <Route exact path={"/"} element={<LandingPage/>}/>
                  <Route exact path={"/about"} element={<AboutPage/>}/>
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
