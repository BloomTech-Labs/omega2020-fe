import React from 'react';
import { stringify } from './stringify';

let conditionRow = 3;
let conditionCol = 3;
let gridLength = 9;

export function formatPuzzle(puzzle) {
  const formattedPuzzle = createArray(gridLength, gridLength);

  for (let i = 0; i < puzzle.length; i++) {
    const rowId = getRowId(i);
    const colId = getColId(i);

    const editable = puzzle[i] === '.';

    formattedPuzzle[rowId][colId] = {
      cellValue: puzzle[i],
      cellId: stringify(rowId, colId),
      editable,
    };
  }
  return formattedPuzzle;
}

function getRowId(i) {
  return Math.floor(i / gridLength);
}

function getColId(i) {
  return i % gridLength;
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
