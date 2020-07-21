import React from 'react';
import { render } from '@testing-library/react';
import  { configure, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import AboutUsPage from '../../components/AboutUsPage/AboutUsPage';
import Adapter from 'enzyme-adapter-react-16';
import { Box, Container } from '@material-ui/core/';
import { createMount } from '@material-ui/core/test-utils';


configure({ adapter: new Adapter() });

it('renders the typography elements, and contains matching element', () => {

    const mount =  createMount();
    const wrapper = mount(<AboutUsPage /> )

    expect(wrapper.find(Box)).toHaveLength(49)
    expect(wrapper.find(Container)).toHaveLength(1)


})