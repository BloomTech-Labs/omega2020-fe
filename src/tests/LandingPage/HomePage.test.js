import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography } from '@material-ui/core';
import BlueButton from '../../components/assets/BlueButton';
import HomePage from '../../components/LandingPage/HomePage';

configure({ adapter: new Adapter() });

describe('the information on the banner', () => {
    const renderHome = renderer.create(<HomePage />); //r represent renderer
    const rootHome = renderHome.root; //i represent instance

    const wrapper = mount(<HomePage />);
    const iWrapper = wrapper.instance();
    
    it('snapshot the info on the homepage', () => {
        const Home = renderer.create(<HomePage />).toJSON();
        expect(Home).toMatchSnapshot();
    });

    it('checks the title prop in the BlueButton', () => {
        expect(rootHome.findByType(BlueButton).props.title).toBe('Get Started; learn the game play');
    });

    it('checks the href prop in the BlueButton', () => {
        expect(rootHome.findByType(BlueButton).props.href).toBe('/tutorial')
    })

  it('checks the root for info', () => {
    expect(wrapper.containsMatchingElement(
      <Typography> 
          Sudomega Interactive Sudoku
      </Typography>
    )).toBeTruthy();
    
    expect(wrapper.containsMatchingElement(
      <Typography>
          Learn how to play, upload your own sudoku
          <br />
          games, and compete with friends :&#41;
      </Typography>
    )).toBeTruthy();

    expect(wrapper.containsMatchingElement(
        <Typography>
            No signup required
        </Typography>
    )).toBeTruthy();


    expect(iWrapper).toEqual(null)
    expect(rootHome.findByProps({id: 'sudo'}).props.children).toBeTruthy();
    expect(rootHome.findByProps({id: 'upload'}).props.children).toBeTruthy();    

  });

});
