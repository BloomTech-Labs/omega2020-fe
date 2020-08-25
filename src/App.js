import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// General utilities ---------------------------------------------
import history from './utils/history';
import { GridContext } from './store/contexts/GridContext';
import { PuzzleContext } from './store/contexts/PuzzleContext';
import { WinContext } from './store/contexts/WinContext';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

// Working components ---------------------------------------------
import Login from './components/Authentication/LoginForm';
import Registration from './components/Authentication/RegisterForm';
import NavCondition from './components/Navigation/NavBarCondition';
import MenuPage from './components/Navigation/MenuPage';
import LandingPage from './components/LandingPage/LandingPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Tutorial from './components/Tutorial/tutorial-page';
import GamePage from './components/GamePage/GamePage';
import SoonPage from './components/soonPage/soon';
import selectionPage from './components/LevelSelection/selectionPage';
import SettingsModal from './components/GamePage/Settings';
import FooterCondition from './components/Navigation/FooterCondition';
import RenderPuzzle from './components/SudokuGame/puzzle-handler/RenderPuzzle';

// What is left to update ---------------------------------------------
import KeyPad from './components/SudokuGame/puzzle-builder/KeyPad/KeyPad';
import UploadForm from './components/SudokuGame/Upload-image/UploadForm';
import UploadSudoku2 from './components/SudokuGame/Upload-image/UploadSudoku2'; // refactor

const App = () => {
  // state handling
  // TODO: maybe in the future set up 1 context handler
  const [win, setWin] = useState('');

  const [puzzleState, setPuzzleState] = useState('9');

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
    numbers: [],
  });

  // TODO: planing on using grid and level for routing games
  // Ex: <Route path={`/game/${grid}/${level}`} component={GamePage} />
  let grid = `${gridState.gridlength}x${gridState.gridlength}`;
  let level = gridState.level;

  // Login & Register state
  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleLoginStateChanged = () => {
    setToken(localStorage.getItem('token'));
  };

  // darkMode & lightMode state
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'dark' ? darkMode : lightMode;
  if (!componentMounted) {
    return <div />;
  }

  let themes = 'dark';
  console.log(`theme in app ${theme}`);

  return (
    <WinContext.Provider value={{ win, setWin }}>
      <GridContext.Provider value={{ gridState, setGridState }}>
        <PuzzleContext.Provider value={{ puzzleState, setPuzzleState }}>
          <Router history={history}>
            <ThemeProvider theme={themeMode}>
              <div className='App'>
                <GlobalStyles />
                <NavCondition
                  token={token}
                  toggleTheme={toggleTheme}
                  theme={theme}
                />
                <Switch>
                  <Route
                    path='/login'
                    component={(props) => (
                      <Login {...props} onChange={handleLoginStateChanged} />
                    )}
                  />
                  <Route
                    path='/register'
                    component={(props) => (
                      <Registration
                        {...props}
                        onChange={handleLoginStateChanged}
                      />
                    )}
                  />
                  <Route
                    exact
                    path='/'
                    component={() => <LandingPage theme={theme} />}
                  />

                  <Route path='/about' component={AboutUsPage} />
                  <Route path='/tutorial' component={Tutorial} />
                  <Route path='/coming-soon' component={SoonPage} />
                  <Route
                    path='/menu'
                    component={(props) => (
                      <MenuPage toggleTheme={toggleTheme} theme={theme} />
                    )}
                  />

                  <Route path='/levels' component={selectionPage} />

                  <Route exact path='/keypad' component={KeyPad} />

                  <Route path={'/game'} component={GamePage} />

                  <Route
                    path={'/puzzle'}
                    component={() => <RenderPuzzle theme={themes} />}
                  />

                  <Route path='/upload' component={UploadForm} />
                  <Route path='/upload-save' component={UploadSudoku2} />

                  <Route
                    path='/settings'
                    component={() => (
                      <SettingsModal toggleTheme={toggleTheme} theme={theme} />
                    )}
                  />
                </Switch>
                {/* <FooterCondition /> */}
              </div>
            </ThemeProvider>
          </Router>
        </PuzzleContext.Provider>
      </GridContext.Provider>
    </WinContext.Provider>
  );
};

export default App;
