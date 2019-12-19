import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing';
import Login from './components/Login';
import MenuPage from './components/MenuPage';
import PlaySudoku from './components/PlaySudoku';

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/play-sudoku" component={PlaySudoku} />
             <div className="App">
              <h1>Omega2020 App</h1>
            </div>
          </Switch>
      </Router>
    </div>
   
  );
}

export default App;
