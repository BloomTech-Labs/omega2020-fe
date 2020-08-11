import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography } from '@material-ui/core';
import Game6x6 from '../../images/Game6x6.png';
import Simulation6x6 from '../../components/LandingPage/Simulation6x6';

configure({ adapter: new Adapter() });

describe('the information on the simulation', () => {
  const simulation6x6Render = renderer.create(<Simulation6x6 />); 
  const simulation6x6Root = simulation6x6Render.root;
  
  const wrapper = mount(<Simulation6x6 />);
  const iWrapper = wrapper.instance();
  
  it('snapshot the info on the Game Simulation', () => {
    const simulation = renderer.create(<Simulation6x6 />).toJSON();
    expect(simulation).toMatchSnapshot();
  });

  it('checks the image', () => {
      expect(wrapper.find('img').prop('src')).toEqual(Game6x6)
  })

  it('checks the root for info (props and type)', () => {
    expect(wrapper.containsMatchingElement(
    <Typography>
        Try to solve this 6x6 sudoku:
    </Typography>
    )).toBeTruthy();

    expect(wrapper.containsMatchingElement(
    <Typography>
        Each row, column and square needs to be filled
        <br />
        out with the numbers 1-6, without repeating any
        <br />
        numbers within the row, column or square.
    </Typography>
    )).toBeTruthy();
    


    expect(iWrapper).toEqual(null)
    expect(simulation6x6Root.findByProps({id: 'solve'}).props.children).toBeTruthy();
    expect(simulation6x6Root.findByProps({id: 'row'}).props.children).toBeTruthy();    

  });

});
