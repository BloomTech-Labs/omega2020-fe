import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import  { configure, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import AboutUsPage from '../AboutUsPage';
import Adapter from 'enzyme-adapter-react-16';
import { Box, Container } from '@material-ui/core/';
import { createMount } from '@material-ui/core/test-utils';


configure({ adapter: new Adapter() });

it('Makes a snapshot of the component', () => {
    const aboutUsPage = renderer.create(<AboutUsPage />).toJSON()
    expect(aboutUsPage).toMatchSnapshot();
})


it('renders the material ui elements', () => {

    const mount =  createMount();
    const wrapper = mount(<AboutUsPage /> )

    expect(wrapper.find(Box)).toHaveLength(51)
    expect(wrapper.find(Container)).toHaveLength(1)


})