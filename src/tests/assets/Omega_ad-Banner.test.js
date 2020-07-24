import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import OBanner from '../../components/assets/Omega_ad-Banner';
import BlueButton from '../../components/assets/BlueButton';
import Adapter from 'enzyme-adapter-react-16';
import { Typography, Box, CardHeader } from '@material-ui/core';
import AppIcon from '../../images/omega-mobile-icon.png';

configure({ adapter: new Adapter() });

describe('the Github banner ', () => {
  const ReactWrapper = mount(<OBanner />);

  it('snapshot the components', () => {
    const banner = renderer.create(<OBanner />).toJSON();
    const iBanner = banner.root;

    expect(banner).toMatchSnapshot();
    // expect(iBanner.find(BlueButton).props.title).toBe('GitHub')
    // expect(iBanner.findByProps({ className: 'title' }).children).toEqual(['Github']);
  });

  it('render the props', () => {
    const renderOBanner = renderer.create(<OBanner />); 
    const rootOBanner = renderOBanner.root;

    expect(rootOBanner.findByType(BlueButton).props.title).toBe('GitHub')
    expect(rootOBanner.findByType(BlueButton).props.href).toBe('https://github.com/Lambda-School-Labs/omega2020-fe')
})


  it('renders the material ui length correctly, and the text content', () => {
    expect(ReactWrapper.find(Typography)).toHaveLength(4);
    expect(ReactWrapper.find('h4').text()).toEqual('Omega 2020');
    expect(ReactWrapper.find('h5').text()).toEqual(
      'Coming soon to app stores near you :)'
    );
    expect(ReactWrapper.find(CardHeader)).toHaveLength(4);
    expect(ReactWrapper.find(Box)).toHaveLength(3);
  });

  it('render the image in the component', () => {
    expect(ReactWrapper.find('img')).toHaveLength(1);
    expect(ReactWrapper.find('img').prop('src')).toEqual(AppIcon);
  });
});
