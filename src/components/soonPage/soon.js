import React from 'react';
import './soon.css';
// import logo from './logo.svg';
import sudoku from './sudoku.jpg';


function Soon() {
  return (
    <div className="sudoku">
        <img className="sudoku-logo" src={sudoku}  alt="sudoku" />
          <h1 className="firstFont"> WE KNOW YOU'RE EXCITED! </h1>
          <p className="secondFont">Omega 2020 sudoku is </p>
          <h1 className="thirdFont"> COMING SOON </h1>
          <p className="fourthFont"> In the meantime <b>subscribe</b> to get alerted when the game is available </p>

          <section className="button"> 

            <p className="sub"> subscribe </p>


            <p className="learn"> learn how to play! </p>

          </section>
    </div>
  );
}


export default Soon;