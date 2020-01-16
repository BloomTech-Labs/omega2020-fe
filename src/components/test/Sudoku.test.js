import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Landing page renders Omega2020', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Omega2020/i);
  expect(linkElement).toBeInTheDocument();
});

test('Sudoku renders board and buttons correctly', () => {
  expect(render(<Sudoku />)).toMatchSnapshot();
  expect(render(<SudokuButtons />)).toMatchSnapshot();

});

test('button text contains undo and get hint', () => {
  const { getByText } = render(<SudokuButtons />);

  getByText(/undo/i);
  getByText(/get hint/i);
});
