import React from 'react';
import './soon.css';
import sudoku from './sudoku.jpg';


function Soon() {
  return (
    <div data-testid='sudo-container' className="sudoku">
        <img data-testid='sudo-logo' className="sudoku-logo" src={sudoku}  alt="sudoku" />
          <h1 data-testid='sudo-firstFont' className="firstFont"> WE KNOW YOU'RE EXCITED! </h1>
          <p data-testid='sudo-secondFont' className="secondFont">Omega 2020 sudoku is </p>
          <h1 data-testid='sudo-thirdFont' className="thirdFont"> COMING SOON </h1>
          <p data-testid='sudo-fourthFont' className="fourthFont"> In the meantime <b>subscribe</b> to get alerted when the game is available </p>

          <section data-testid='sudo-button' className="button"> 

            <p data-testid='sudo-sub' className="sub"> subscribe </p>


            <p data-testid='sudo-learn' className="learn"> learn how to play! </p>

          </section>

import sudoku from './sudoku.png';
import BlueButton from '../assets/BlueButton';

function Soon() {
  return (
    <div className='sudoku'>
      <img className='sudoku-logo' src={sudoku} alt='sudoku' />
      <h1 className='firstFont'> WE KNOW YOU'RE EXCITED! </h1>
      <p className='secondFont'>Omega 2020 sudoku is </p>
      <h1 className='thirdFont'> COMING SOON </h1>
      <p className='fourthFont'>
        In the meantime <b>subscribe</b> to get alerted when the game is
        available
      </p>

      <section className='button'>
        <BlueButton title={'subscribe'} />
        <BlueButton title={'learn how to play!'} />
      </section>
    </div>
  );
}

export default Soon;
