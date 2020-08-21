import React, { useState, useReducer } from 'react';
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
import { usePuzzleState } from './store/puzzleState/usePuzzleState';
import { level9x9, level6x6 } from './store/puzzleState/levels';

// Working components ---------------------------------------------
import NavCondition from './components/Navigation/NavBarCondition';
import MenuPage from './components/Navigation/MenuPage';
import LandingPage from './components/LandingPage/LandingPage';
import SoonPage from './components/soonPage/soon';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Tutorial from './components/Tutorial/tutorial-page';
import selectionPage from './components/LevelSelection/selectionPage';
import FooterCondition from './components/Navigation/FooterCondition';

// What is left to update ---------------------------------------------
import GamePage from './components/GamePage/GamePage';
import KeyPad from './components/SudokuGame/puzzle-builder/KeyPad/KeyPad';
import Registration from './components/Authentication/RegisterForm'; // add form validation
import Login from './components/Authentication/LoginForm'; // add form validation
import RenderPuzzle from './components/SudokuGame/puzzle-handler/RenderPuzzle'; // render 4x4 6x6 9x9
import UploadForm from './components/SudokuGame/Upload-image/UploadForm';
import UploadSudoku2 from './components/SudokuGame/Upload-image/UploadSudoku2'; // refactor

const App = () => {
  // state handling
  const [win, setWin] = useState('');
  // ------------------------------------------------
  const [puzzleState, setPuzzleState] = useState('9');
  // the issue we are currently having is figuing out how to make puzzleState persist.
  // ------------------------------------------------
  const [gridState, setGridState] = useState({
    boardState: '',
    gridlength: '9',
    row: '',
    col: '',
    puzzleId: '',
    level: 'Easy',
    solved: '',
    original: '',
    history: [],
    conflicts: new Set([]),
  });

  let grid = `${gridState.gridlength}x${gridState.gridlength}`;
  let level = gridState.level;

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

  // usePuzzleState
  // const [puzzleState, togglePuzzle, puzzleMounted] = usePuzzleState();
  // const puzzleLevels = puzzleState === '9' ? level9x9 : level6x6;

  // if (!puzzleMounted) {
  //   return <div />;
  // }

  return (
    <WinContext.Provider value={[win, setWin]}>
      <GridContext.Provider value={[gridState, setGridState]}>
        <PuzzleContext.Provider value={[puzzleState, setPuzzleState]}>
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
                  <Route path='/levels' component={() => <selectionPage />} />
                  <Route exact path='/keypad' component={KeyPad} />

                  <Route path={`/game`} component={GamePage} />
                  {/* <Route path={`/game/${grid}/${level}`} component={GamePage} /> */}

                  <Route
                    path={`puzzle/${grid}`}
                    component={() => <RenderPuzzle theme={themes} />}
                  />

                  <Route path='/upload' component={UploadForm} />
                  <Route path='/upload-save' component={UploadSudoku2} />
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
