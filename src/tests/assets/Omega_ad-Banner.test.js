import React from 'react';
import  { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import OBanner from '../../components/assets/Omega_ad-Banner';
import Adapter from 'enzyme-adapter-react-16';
import { Typography, Box, CardHeader } from '@material-ui/core';
import AppIcon from '../../images/omega-mobile-icon.png';


configure({ adapter: new Adapter() });

describe('the Github banner ', () => {

    const ReactWrapper = mount(<OBanner />)

    it('snapshot the components', () => {
        const banner = renderer.create(<OBanner />).toJSON()
        expect(banner).toMatchSnapshot();
    })


    it('renders the material ui length correctly, and the text content', () => {
        expect(ReactWrapper.find(Typography)).toHaveLength(4);
        expect(ReactWrapper.find("h4").text()).toEqual('Omega 2020')
        expect(ReactWrapper.find("h5").text()).toEqual('Coming soon to app stores near you :)')
        expect(ReactWrapper.find(CardHeader)).toHaveLength(4);
        expect(ReactWrapper.find(Box)).toHaveLength(3);
    })

    it('render the image in the component', () => {
        expect(ReactWrapper.find("img")).toHaveLength(1)
        expect(ReactWrapper.find('img').prop('src')).toEqual(AppIcon)
    })
})