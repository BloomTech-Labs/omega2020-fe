import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Sudoku from './oldComponents/puzzles-by-difficulty/random/Sudoku';
import NavCondition from './oldComponents/Navs/NavCondition';
import history from './utils/history';
import Registration from './oldComponents/auth/Register';
import Login from './oldComponents/auth/Login';
import Landing from './oldComponents/Landing';
import Footer from './oldComponents/Navs/Footer';
import ResumedPuzzle from './oldComponents/save-resume/ResumedPuzzle';
import MediumSudoku from './oldComponents/puzzles-by-difficulty/medium/MediumSudoku';
import HardSudoku from './oldComponents/puzzles-by-difficulty/hard/HardSudoku';
import DiabolicalSudoku from './oldComponents/puzzles-by-difficulty/diabolical/DiabolicalSudoku';
import EasySudoku from './oldComponents/puzzles-by-difficulty/easy/EasySudoku';
import UploadForm from './oldComponents/upload-image/UploadForm';
import UploadSudoku2 from './oldComponents/upload-image/UploadSudoku2';
import TeamList from './oldComponents/about-team/TeamList';
import './App.css';

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
					<Route exact path='/' component={Landing} />

					{/* <Route path="/login" component={Login} /> */}
					<Route
						path='/login'
						render={(props) => (
							<Login {...props} onChange={handleLoginStateChanged} />
						)}
					/>

					{/* <Route path="/register" component={Registration} /> */}
					<Route
						path='/register'
						render={(props) => (
							<Registration {...props} onChange={handleLoginStateChanged} />
						)}
					/>
					<Route path='/random' component={Sudoku} />
					<Route path='/medium' component={MediumSudoku} />
					<Route path='/diabolical' component={DiabolicalSudoku} />
					<Route path='/easy' component={EasySudoku} />
					<Route path='/hard' component={HardSudoku} />
					<Route path='/user-puzzles' component={ResumedPuzzle} />
					{/* <Route path="/upload" component={UploadImage} /> */}
					<Route path='/upload' component={UploadForm} />
					<Route path='/upload-save' component={UploadSudoku2} />
					<Route path='/about' component={TeamList} />
				</Switch>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
