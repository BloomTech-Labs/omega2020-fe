import React from 'react';
import { NavLink } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>Omega2020 Landing Page</h1>
      <NavLink to={'/login'}>Login</NavLink>
    </div>
  );
}

export default Landing;
