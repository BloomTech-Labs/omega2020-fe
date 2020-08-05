import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Box, Container } from '@material-ui/core';
import NavCondition from '../../components/Navigation/NavBarCondition';

configure({ adapter: new Adapter() });


describe('the length of the material ui and match the snapshot of the foot mobile component', () => {

    const wrapper = mount(<NavCondition />)

    it('snapshot the component', () => {
        const menuShot = renderer.create(<NavCondition />).toJSON();
        expect(menuShot).toMatchSnapshot();
    })

    it('render the length of the material ui', () => {
        expect(wrapper.find(Box).length).toEqual(7);
        expect(wrapper.find(Container).length).toEqual(1);
    })

})