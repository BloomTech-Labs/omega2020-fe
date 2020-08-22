import React from 'react';
import { stringify } from './stringify';

export function formatPuzzle(puzzle, Length) {
  const formattedPuzzle = createArray(Length, Length);

  for (let i = 0; i < puzzle.length; i++) {

    const rowId = getRowId(i, Length);
    const colId = getColId(i, Length);

    const editable = puzzle[i] === '.';

    formattedPuzzle[rowId][colId] = {
      cellValue: puzzle[i],
      cellId: stringify(rowId, colId),
      editable,
    };
  }
  return formattedPuzzle;
}

function getRowId(i, Length) {
  return Math.floor(i / Length);
}

function getColId(i, Length) {
  return i % Length;
}

function createArray(length) {
  const arr = new Array(length || 0);
  let i = length;

  if (arguments.length > 1) {
    const args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }
  return arr;
}

