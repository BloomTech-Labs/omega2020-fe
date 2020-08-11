import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Box, Typography, Link, CardHeader } from '@material-ui/core';
import MenuPage from '../../components/Navigation/MenuPage';

configure({ adapter: new Adapter() });


describe('the length of the material ui and match the snapshot of the foot mobile component', () => {

    const wrapper = mount(<MenuPage />)

    it('snapshot the component', () => {
        const menuShot = renderer.create(<MenuPage />).toJSON();
        expect(menuShot).toMatchSnapshot();
    })

    it('render the length of the material ui', () => {
        expect(wrapper.find(CardHeader).length).toEqual(1);
        expect(wrapper.find(Typography).length).toEqual(7);
        expect(wrapper.find(Box).length).toEqual(3);
        expect(wrapper.find(Link).length).toEqual(3);
    })


    it('renders all the text contents in the component', () => {
        expect(wrapper.containsMatchingElement(
            <Typography>
                MENU
            </Typography>)
        ).toBeTruthy();
        
        expect(wrapper.containsMatchingElement(
            <Typography>
                Home
            </Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>
                About
            </Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>
                Tutorials
            </Typography>
        )).toBeTruthy();

    })
})