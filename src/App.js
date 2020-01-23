import React from 'react';
import Sudoku from './components/Sudoku.js';

import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import Nav from "./components/Nav";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Registration from './components/Register';
import Login from "./components/Login";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SavedPuzzlesList from "./components/SavedPuzzlesList.js";
import SavedPuzzles from "./components/SavedPuzzles";
import MediumSudoku from './components/puzzles-by-difficulty/medium/MediumSudoku'
import HardSudoku from './components/puzzles-by-difficulty/hard/HardSudoku'
import DiabolicalSudoku from './components/puzzles-by-difficulty/diabolical/DiabolicalSudoku'
import EasySudoku from './components/puzzles-by-difficulty/easy/EasySudoku'


const App = () => {
  
  return (
    <Router history={history}>
    <div className="App">
    <Nav />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/puzzles" component={SavedPuzzlesList} />
        <Route path="/random" component={Sudoku} />
        <Route path="/medium" component={MediumSudoku} />
        <Route path="/diabolical" component={DiabolicalSudoku} />
        <Route path="/easy" component={EasySudoku} />
        <Route path="/hard" component={HardSudoku} />
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
