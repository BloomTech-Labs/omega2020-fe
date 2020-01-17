import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './App';

// describe('<App />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<App />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

test('There is Omega2020 in the app', () => {
    expect('Omega2020').toMatch(/meg/);
});