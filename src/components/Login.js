import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Omega2020 Login Page</h1>
      <NavLink to={'/play-sudoku'}>play</NavLink>
    </div>
  );
}

export default Login;