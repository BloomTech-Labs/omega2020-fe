import React from 'react';
import { NavLink } from 'react-router-dom';
import SudokuBoard from './SudokuBoard';
import SudokuField from './SudokuField';

function PlaySudoku() {
  return (
    <div>
      <h1>Omega2020 PlaySudoku Page</h1>
      <SudokuField />
      <SudokuBoard />
    </div>
  );
}

export default PlaySudoku;