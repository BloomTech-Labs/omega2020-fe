import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// General utilities
import history from './utils/history';
import './App.css';

// What we've updated
import Registration from './components/auth/Register';
import Login from './components/auth/Login';
import LandingPage from './components/LandingPage/LandingPage';
import SoonPage from './components/soonPage/soon';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Footer from './components/Navs/Footer';

// What is left to update
import Sudoku from './components/puzzles-by-difficulty/random/Sudoku';
import NavCondition from './components/Navs/NavCondition';
import ResumedPuzzle from './components/save-resume/ResumedPuzzle';
import MediumSudoku from './components/puzzles-by-difficulty/medium/MediumSudoku';
import HardSudoku from './components/puzzles-by-difficulty/hard/HardSudoku';
import DiabolicalSudoku from './components/puzzles-by-difficulty/diabolical/DiabolicalSudoku';
import EasySudoku from './components/puzzles-by-difficulty/easy/EasySudoku';
import UploadForm from './components/upload-image/UploadForm';
import UploadSudoku2 from './components/upload-image/UploadSudoku2';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLoginStateChanged = () => {
    setToken(localStorage.getItem('token'));
  };

  return (
    <Router history={history}>
      <div className='App'>
        <NavCondition token={token} />
        <Switch>
          <Route
            path='/login'
            render={(props) => (
              <Login {...props} onChange={handleLoginStateChanged} />
            )}
          />
          <Route
            path='/register'
            render={(props) => (
              <Registration {...props} onChange={handleLoginStateChanged} />
            )}
          />
          <Route exact path='/' component={LandingPage} />
          <Route path='/soon' component={SoonPage} />
          <Route path='/about' component={AboutUsPage} />

          {/* ---------------------------------------------- */}

          <Route path='/random' component={Sudoku} />
          <Route path='/medium' component={MediumSudoku} />
          <Route path='/diabolical' component={DiabolicalSudoku} />
          <Route path='/easy' component={EasySudoku} />
          <Route path='/hard' component={HardSudoku} />
          <Route path='/user-puzzles' component={ResumedPuzzle} />
          <Route path='/upload' component={UploadForm} />
          <Route path='/upload-save' component={UploadSudoku2} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
