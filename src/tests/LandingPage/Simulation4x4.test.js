import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography } from '@material-ui/core';
import Game4x4 from '../../images/Game4x4.png';
import Simulation4x4 from '../../components/LandingPage/Simulation4x4';

configure({ adapter: new Adapter() });

describe('the information on the simulation', () => {
  const simulation4x4Render = renderer.create(<Simulation4x4 />); 
  const simulation4x4Root = simulation4x4Render.root;
  
  const wrapper = mount(<Simulation4x4 />);
  const iWrapper = wrapper.instance();
  
  it('snapshot the info on the Game Simulation', () => {
    const simulation = renderer.create(<Simulation4x4 />).toJSON();
    expect(simulation).toMatchSnapshot();
  });

  it('checks the image', () => {
      expect(wrapper.find('img').prop('src')).toEqual(Game4x4)
  })

  it('checks the root for info (props and type)', () => {
    expect(wrapper.containsMatchingElement(
    <Typography>
        Try to solve this 4x4 sudoku:
    </Typography>
    )).toBeTruthy();

    expect(wrapper.containsMatchingElement(
    <Typography>
        Each row, column and square needs to be filled
        <br />
        out with the numbers 1-4, without repeating any
        <br />
        numbers within the row, column or square.
    </Typography>
    )).toBeTruthy();
    


    expect(iWrapper).toEqual(null)
    expect(simulation4x4Root.findByProps({id: 'solve'}).props.children).toBeTruthy();
    expect(simulation4x4Root.findByProps({id: 'row'}).props.children).toBeTruthy();    

  });

});
