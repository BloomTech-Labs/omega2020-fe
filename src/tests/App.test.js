import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../App';
import NavCondition from '../components/Navigation/NavCondition';
import NavBarWeb from '../components/Navigation/NavBar/NavBar-web';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// test('render component', async () => {
//   const { getByText } = render(<App />);
//   const title = getByText(/Omega 2020/i);
//   expect(title).toBeInTheDocument();
//   get
// });

// it('App renders NavCondition', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<NavCondition />, div);
// });
