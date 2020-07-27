import React from 'react';
import  { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import WhiteButton from '../../components/assets/WhiteButton';
import Adapter from 'enzyme-adapter-react-16';
import { Typography, Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('the white button content', () => {

    const mockInfo = {
        title: 'Play'
    }

    const ReactWrapper = mount(<WhiteButton mockInfo={mockInfo} />)

    it('snapshot the components', () => {
        const whiteButton = renderer.create(<WhiteButton />).toJSON()
        expect(whiteButton).toMatchSnapshot();
    })


    it('renders the mock info, and the length of the typography, and button', () => {
        expect(ReactWrapper.find(Typography)).toHaveLength(1);
        expect(ReactWrapper.find(Button)).toHaveLength(1);
        let wrapper = ReactWrapper.props().mockInfo.title
        expect(wrapper).toEqual(mockInfo.title)        
    })


    
})