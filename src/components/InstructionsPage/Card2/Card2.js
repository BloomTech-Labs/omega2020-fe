import React from 'react';
import './instruction.css';

function Card2() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <p onClick={goBack} className='cancel'>
        {' '}
        X{' '}
      </p>

      <h2 className='start'> Let's kick it up a notch </h2>

      <section>
        <div>
          <h5 className='top'> Try to solve this 6x6 sudoku:</h5>
          <p className='bot'>
            {' '}
            Each row, column and square needs to be filled out with the numbers
            1-6, without repeating any numbers within the row, column or square.
          </p>
        </div>

        <div>
          <h5 className='top'> Instructions: </h5>
          <p className='bottom'>
            {' '}
            1. In the light blue box enter the number 6.{' '}
          </p>
          <p className='bottom'>
            {' '}
            2. In the next light blue box enter the number 5.{' '}
          </p>
        </div>

        <div>
          <h5 className='top'> Do you know what comes next? </h5>
          <p className='bottom'> Try to complete the rest… you got this! </p>
        </div>

        <div className='instruction_img'>
          <img src='Image.png' alt='instruction' />
        </div>

        <div className='help'>
          <p> Need more help? </p>
          <p className='answer'> REVEAL NEXT ANSWER </p>
        </div>

        <div className='button'>
          <h2 className='back'> BACK </h2>
          <h2 className='next'> NEXT </h2>
        </div>
      </section>
    </div>
  );
}

export default Card2;
