import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Typography, Box, CardHeader } from '@material-ui/core';
import FooterMobile from '../../../components/Navigation/Footer/Footer-mobile';

configure({ adapter: new Adapter() });


describe('the length of the material ui and match the snapshot of the foot mobile component', () => {

    const wrapper = mount(<FooterMobile />)

    it('snapshot the component', () => {
        const Footer = renderer.create(<FooterMobile />).toJSON();
        expect(Footer).toMatchSnapshot();

    })

    it('render the length of the material ui', () => {

        expect(wrapper.find(Typography).length).toEqual(0)
        expect(wrapper.find(Box).length).toEqual(5)
        expect(wrapper.find(CardHeader).length).toEqual(3)

    })

})