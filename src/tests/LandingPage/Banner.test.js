import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography } from '@material-ui/core';
import BlueButton from '../../components/assets/BlueButton';
import Banner from '../../components/LandingPage/Banner';

configure({ adapter: new Adapter() });

describe('the information on the banner', () => {
  const rBanner = renderer.create(<Banner />); //r represent renderer
  const iBanner = rBanner.root; //i represent instance
  
  const wrapper = mount(<Banner />);
  const iWrapper = wrapper.instance();
  
  it('snapshot the info on th banner', () => {
    const banner = renderer.create(<Banner />).toJSON();
    expect(banner).toMatchSnapshot();
  });

  it('checks the prop in the BlueButton', () => {
    expect(iBanner.findByType(BlueButton).props.title).toBe(
      'Get Started Today'
    );
  });

  it('checks the root for info', () => {
    expect(wrapper.containsMatchingElement(
      <Typography> 
        Improve Your Skills 
        <br /> 
        By Understanding Game Strategies 
      </Typography>
    )).toBeTruthy();
    
    expect(wrapper.containsMatchingElement(
      <Typography>
        Learn to recognize key patterns and methods
        <br />
        to improve your speed and skill level
      </Typography>
    )).toBeTruthy();


    expect(iWrapper).toEqual(null)
    expect(iBanner.findByProps({id: 'improve1'}).props.children).toBeTruthy();
    expect(iBanner.findByProps({id: 'improve2'}).props.children).toBeTruthy();    

  });

});
