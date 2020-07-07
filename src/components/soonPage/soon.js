import React from 'react';
import './soon.css';
import sudoku from './sudoku.jpg';
import BlueButton from '../assets/BlueButton';

function Soon() {
  return (
    <div data-testid='sudo-container' className="sudoku">
        <img data-testid='sudo-logo' className="sudoku-logo" src={sudoku}  alt="sudoku" />
          <h1 data-testid='sudo-firstFont' className="firstFont"> WE KNOW YOU'RE EXCITED! </h1>
          <p data-testid='sudo-secondFont' className="secondFont">Omega 2020 sudoku is </p>
          <h1 data-testid='sudo-thirdFont' className="thirdFont"> COMING SOON </h1>
          <p data-testid='sudo-fourthFont' className="fourthFont"> In the meantime <b>subscribe</b> to get alerted when the game is available </p>

          <section data-testid='sudo-button' className='button'> 
               <BlueButton data-testid='sudo-sub' title={'subscribe'} />
               <BlueButton data-testid='sudo-learn' title={'learn how to play!'} />
          </section>
    </div>
)};

export default Soon;
