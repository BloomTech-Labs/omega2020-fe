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


const App = () => {
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading..</div>;
  // }
  return (
    <Router history={history}>
    <div className="App">
    <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/puzzle" component={Sudoku} />
      </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
