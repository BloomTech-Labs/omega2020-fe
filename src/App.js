import React, {useState} from 'react';
import Sudoku from './components/puzzles-by-difficulty/random/Sudoku';

import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import NavCondition from './components/Navs/NavCondition';
import history from "./utils/history";
import Registration from './components/auth/Register';
import Login from "./components/auth/Login";
import Landing from "./components/Landing";
import Footer from "./components/Navs/Footer";
// import SavedPuzzles from "./components/SavedPuzzles";
import ResumedPuzzle from "./components/save-resume/ResumedPuzzle"
import MediumSudoku from './components/puzzles-by-difficulty/medium/MediumSudoku'
import HardSudoku from './components/puzzles-by-difficulty/hard/HardSudoku'
import DiabolicalSudoku from './components/puzzles-by-difficulty/diabolical/DiabolicalSudoku'
import EasySudoku from './components/puzzles-by-difficulty/easy/EasySudoku'
import UploadImage from './components/upload-image/UploadImage'


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  
  const handleLoginStateChanged = () => {
    setToken(localStorage.getItem("token"))
  }

  return (
    <Router history={history}>
    <div className="App">
    < NavCondition token={token} />
    <Switch>
      <Route exact path="/" component={Landing} />

       {/* <Route path="/login" component={Login} /> */}
      <Route path="/login" 
       render={(props) => <Login {...props} onChange={handleLoginStateChanged} /> }
       />
      
      {/* <Route path="/register" component={Registration} /> */}
      <Route path="/register" 
       render={(props) => <Registration {...props} onChange={handleLoginStateChanged} /> }
       />
      <Route path="/random" component={Sudoku} />
      <Route path="/medium" component={MediumSudoku} />
      <Route path="/diabolical" component={DiabolicalSudoku} />
      <Route path="/easy" component={EasySudoku} />
      <Route path="/hard" component={HardSudoku} />
      <Route path="/user-puzzles" component={ResumedPuzzle} />
      <Route path="/upload" component={UploadImage} />
   



    </Switch>
      <Footer />
  
    </div>
    </Router>
  );
}

export default App;
