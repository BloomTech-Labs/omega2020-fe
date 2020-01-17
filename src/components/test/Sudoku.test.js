import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App.js'
import Sudoku from '../Sudoku.js';
import SudokuButtons from '../SudokuButtons';

test('Landing page renders Omega2020', () => {
  const { getByText } = render(<App />);
  const sudoku = getByText(/sudoku/i);
  expect(sudoku).toBeInTheDocument();
});


test('button text contains undo and get hint', () => {
  const { getByText } = render(<SudokuButtons />);
  getByText(/undo/i);
  getByText(/get hint/i);
});
