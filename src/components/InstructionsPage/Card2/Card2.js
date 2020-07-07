import React from 'react';
import './instruction.css';

function Card2() {
  return (
    <div>
      <p className='cancel' data-testid='cancel-card'>
        {' '}
        X{' '}
      </p>

      <h2 className='start' data-testid='start-card'> Let's kick it up a notch </h2>

      <section>
        <div>
          <h5 className='top' data-testid='top-card'> Try to solve this 6x6 sudoku:</h5>
          <p className='bot' data-testid='bot-card'>
            {' '}
            Each row, column and square needs to be filled out with the numbers
            1-6, without repeating any numbers within the row, column or square.
          </p>
        </div>

        <div>
          <h5 className='top' data-testid='top-card'> Instructions: </h5>
          <p className='bottom' data-testid='bottom-card1'>
            {' '}
            1. In the light blue box enter the number 6.{' '}
          </p>
          <p className='bottom' data-testid='bottom-card2'>
            {' '}
            2. In the next light blue box enter the number 5.{' '}
          </p>
        </div>

        <div>
          <h5 className='top' data-testid='top-card'> Do you know what comes next? </h5>
          <p className='bottom' data-testid='bottom-card3'> Try to complete the rest… you got this! </p>
        </div>

        <div className='instruction_img' data-testid='img-card'>
          <img src='Image.png' alt='instruction' />
        </div>

        <div className='help' data-testid='help-card'>
          <p> Need more help? </p>
          <p className='answer' data-testid='answer-card'> REVEAL NEXT ANSWER </p>
        </div>

        <div className='button' data-testid='button-card'>
          <h2 className='back' data-testid='back-card'> BACK </h2>
          <h2 className='next' data-testid='next-card'> NEXT </h2>
        </div>
      </section>
    </div>
  );
}

export default Card2;
