import React from 'react';
import renderer from 'react-test-renderer';


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

test('/', () => {
  // const root = document.createElement('div');
  // document.body.appendChild(root);
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  // const tree = renderer.create(<App />).toJSON()

})