import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography } from '@material-ui/core';
import Simulation from '../../components/LandingPage/GameSimulation';

configure({ adapter: new Adapter() });

describe('the information on the simulation', () => {
  const simulationRender = renderer.create(<Simulation />); //r represent renderer
  const simulationRoot = simulationRender.root;
  
  const wrapper = mount(<Simulation />);
  const iWrapper = wrapper.instance();
  
  it('snapshot the info on the Game Simulation', () => {
    const simulation = renderer.create(<Simulation />).toJSON();
    expect(simulation).toMatchSnapshot();
  });

  it('checks the root for info', () => {
    expect(wrapper.containsMatchingElement(
    <Typography>
        Learn The Game Play
    </Typography>
    )).toBeTruthy();
    
    expect(wrapper.containsMatchingElement(
    <Typography>
        Start off with something easy
        <br />
        then kick it up a notch
    </Typography>
    )).toBeTruthy();


    expect(iWrapper).toEqual(null)
    expect(simulationRoot.findByProps({id: 'learn'}).props.children).toBeTruthy();
    expect(simulationRoot.findByProps({id: 'start'}).props.children).toBeTruthy();    

  });

});
