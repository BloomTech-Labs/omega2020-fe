import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { CardHeader, Box } from '@material-ui/core';
import NavMob from '../../../components/Navigation/NavBar/NavBar-mobile';
import Logo from '../../../images/omega-logo.png';


configure({ adapter: new Adapter() });


describe('the length of the material ui and match the snapshot of the foot mobile component', () => {

    const wrapper = mount(<NavMob />)

    it('snapshot the component', () => {
        const navShot = renderer.create(<NavMob />).toJSON();
        expect(navShot).toMatchSnapshot();
    })

    it('render the length of the material ui', () => {
        expect(wrapper.find(CardHeader).length).toEqual(3);
        expect(wrapper.find(Box).length).toEqual(6);
    })

    it('render the image in the component', () => {
        expect(wrapper.find('img').prop('src')).toEqual(Logo)
    })

})