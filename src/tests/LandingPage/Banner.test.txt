import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography, CardHeader, Box } from '@material-ui/core';
import BlueButton from '../../components/assets/BlueButton';
import Banner from '../../components/LandingPage/Banner';

configure({ adapter: new Adapter() });

describe('the information on the banner', () => {
  it('snapshot the info on th banner', () => {
    const banner = renderer.create(<Banner />).toJSON();
    expect(banner).toMatchSnapshot();
  });

  it('checks the prop in the BlueButton', () => {
    const rBanner = renderer.create(<Banner />); //r represent renderer
    const iBanner = rBanner.root; //i represent instance
    expect(iBanner.findByType(BlueButton).props.title).toBe(
      'Get Started Today'
    );
  });

  it('shows the length of the material ui', () => {
    const wrapper = mount(<Banner />)
    console.log(wrapper.debug())
    expect(wrapper.find(Box)).toHaveLength(7);
    expect(wrapper.find(Box).prop).toHaveLength(1);
    expect(wrapper.find(Box).children).toHaveLength(1);

    expect(wrapper.find(Typography)).toHaveLength(3);
    expect(wrapper.find(Typography).prop).toHaveLength(1);
    expect(wrapper.find(Typography).children).toHaveLength(1);
    // expect(wrapper.find(Typography).children).toEqual('eer')
    expect(wrapper.find(CardHeader)).toHaveLength(3);
    expect(wrapper.find("improve")).toEqual('bang')
  });

});
