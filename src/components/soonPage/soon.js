import React from 'react';
import './soon.css';
import sudoku from './sudoku.png';
import BlueButton from '../assets/BlueButton';

function Soon() {
  return (
    <div data-testid='sudo-container' className='sudoku'>
      <br />
      <br />
      <img
        data-testid='sudo-logo'
        className='sudoku-logo'
        src={sudoku}
        alt='sudoku'
      />
      <h1 data-testid='sudo-firstFont' className='firstFont'>
        WE KNOW YOU'RE EXCITED!
      </h1>
      <p data-testid='sudo-secondFont' className='secondFont'>
        Sudomega sudoku games are
      </p>
      <br />
      <br />
      <h1 data-testid='sudo-thirdFont' className='thirdFont'>
        COMING SOON
      </h1>
      <br />
      <br />
      <section data-testid='sudo-button' className='button'>
        <BlueButton
          data-testid='sudo-learn'
          title={'learn how to play!'}
          href={'/tutorial'}
        />
      </section>
    </div>
  );
}

export default Soon;
