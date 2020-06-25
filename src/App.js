import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// General utilities
import history from './utils/history';
import './App.css';

// What we've updated
import NavCondition from './components/Navigation/NavBarCondition';
// Register and Login require form validation
import Registration from './components/Authentication/RegisterForm';
import Login from './components/Authentication/LoginForm';
import LandingPage from './components/LandingPage/LandingPage';
import SoonPage from './components/soonPage/soon';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Tutorial from './components/Tutorial/tutorial-page';
import FooterCondition from './components/Navigation/FooterCondition';

// What is left to update

import ConstructPuzzle from './components/SudokuGame/puzzle-handler/ConstructPuzzle';

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
          <Route path='/tutorial' component={Tutorial} />

          {/* ----------------------------------------------- */}

          <Route path='/easy' component={ConstructPuzzle} />
        </Switch>
        <FooterCondition />
      </div>
    </Router>
  );
};

export default App;
