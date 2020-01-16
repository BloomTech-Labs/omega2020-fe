import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Omega2020', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Omega2020/i);
  expect(linkElement).toBeInTheDocument();
});
