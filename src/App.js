import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import NavBar from "./components/NavBar";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import SudokuBoard from "./components/SudokuBoard"

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <Router history={history}>
    <div className="App">
      <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <PrivateRoute path="/board" component={SudokuBoard} />
      </Switch>
      
      <h1>Omega2020 App</h1> 
    </div>
    </Router>
  );
}

export default App;
