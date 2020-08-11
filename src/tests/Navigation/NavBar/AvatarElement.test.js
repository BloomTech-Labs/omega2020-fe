import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { Avatar, Box } from '@material-ui/core';
import AvatarElement from '../../../components/Navigation/NavBar/AvatarElement';

configure({ adapter: new Adapter() });


describe('the length of the material ui and match the snapshot of the foot mobile component', () => {

    const wrapper = mount(<AvatarElement />)

    it('snapshot the component', () => {
        const elementShot = renderer.create(<AvatarElement />).toJSON();
        expect(elementShot).toMatchSnapshot();
    })

    it('render the length of the material ui', () => {
        expect(wrapper.find(Avatar).length).toEqual(1);
        expect(wrapper.find(Box).length).toEqual(1);
    })

})