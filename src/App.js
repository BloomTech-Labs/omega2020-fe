import React, { useState, useReducer } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// General utilities ---------------------------------------------
import history from './utils/history';
import { GridContext } from './store/contexts/GridContext';
import { WinContext } from './store/contexts/WinContext';
import { reducer, initialState } from './store/reducers/index';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

// Working components ---------------------------------------------
import NavCondition from './components/Navigation/NavBarCondition';
import MenuPage from './components/Navigation/MenuPage';
import LandingPage from './components/LandingPage/LandingPage';
import SoonPage from './components/soonPage/soon';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Tutorial from './components/Tutorial/tutorial-page';
import FooterCondition from './components/Navigation/FooterCondition';

// What is left to update ---------------------------------------------
import Registration from './components/Authentication/RegisterForm'; // add form validation
import Login from './components/Authentication/LoginForm'; // add form validation
import RenderPuzzle from './components/SudokuGame/puzzle-handler/RenderPuzzle'; // render 4x4 6x6 9x9

import UploadForm from './components/SudokuGame/Upload-image/UploadForm';
import UploadSudoku2 from './components/SudokuGame/Upload-image/UploadSudoku2'; // refactor

const App = () => {
  // state handling
  const [win, setWin] = useState('');
  const [gridState, setGridState] = useState({
    boardState: '',
    gridlength: '',
    row: '',
    col: '',
    puzzleId: '',
    level: '',
    solved: '',
    original: '',
    history: [],
    conflicts: new Set([]),
  });

  // move login state to context in the future
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
    <WinContext.Provider value={[win, setWin]}>
      <GridContext.Provider value={[gridState, setGridState]}>
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
                    <Registration
                      {...props}
                      onChange={handleLoginStateChanged}
                    />
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
                <Route path='/menu' component={MenuPage} />

                {/* ---------------------------------------------- */}

                <Route
                  path='/9x9Game'
                  render={() => <RenderPuzzle theme={themes} />}
                />
                <Route path='/upload' component={UploadForm} />
                <Route path='/upload-save' component={UploadSudoku2} />
              </Switch>
              <FooterCondition />
            </div>
          </ThemeProvider>
        </Router>
      </GridContext.Provider>
    </WinContext.Provider>
  );
};

export default App;
