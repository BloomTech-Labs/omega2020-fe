import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';

import Board from '../Board.js';


test('Board', () => {
  const conflicts = new Map();
  const boardState = [[{'cellValue': "9"}]]
  const dom = render(<Board boardState={boardState} conflicts={conflicts} />);
  const getById = queryByAttribute.bind(null, 'id');
  const squareValue = getById(dom.container, 'square').value;
  expect(squareValue).toMatch(/9/);
  

});
