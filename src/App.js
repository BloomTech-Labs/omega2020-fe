import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// General utilities
import history from './utils/history';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

// What we've updated
import NavCondition from './components/Navigation/NavBarCondition';
import LandingPage from './components/LandingPage/LandingPage';
import SoonPage from './components/soonPage/soon';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Tutorial from './components/Tutorial/tutorial-page';
import FooterCondition from './components/Navigation/FooterCondition';

// What is left to update
import Registration from './components/Authentication/RegisterForm'; // add form validation
import Login from './components/Authentication/LoginForm'; // add form validation
import ConstructPuzzle from './components/SudokuGame/puzzle-handler/ConstructPuzzle'; // render 4x4 6x6 9x9

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleLoginStateChanged = () => {
    setToken(localStorage.getItem('token'));
  };

  // darkMode / lightMode state
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'dark' ? darkMode : lightMode;
  if (!componentMounted) {
    return <div />;
  }

  let themes = 'dark';
  console.log(`theme in app ${theme}`);

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <div className='App'>
          <GlobalStyles />
          <NavCondition token={token} toggleTheme={toggleTheme} />
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
            <Route
              exact
              path='/'
              render={() => <LandingPage theme={theme} />}
            />

            <Route path='/about' component={AboutUsPage} />
            <Route path='/tutorial' component={Tutorial} />
            <Route path='/coming-soon' component={SoonPage} />

            {/* ---------------------------------------------- */}

            <Route
              path='/9x9Game'
              render={() => <ConstructPuzzle theme={themes} />}
            />
          </Switch>
          <FooterCondition />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
