import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('App.js contains text Omega 2020', () => {
  const { getByText } = render(<App />);
  const element = getByText('Omega 2020');
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
