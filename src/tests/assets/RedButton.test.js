import React from 'react';
import  { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import RedButton from '../../components/assets/RedButton';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('the blue button content', () => {

    const mockInfo = {
        title: 'Tutorial Coming Soon'
    }

    const ReactWrapper = mount(<RedButton mockInfo={mockInfo} />)

    it('snapshot the components', () => {
        const redButton = renderer.create(<RedButton />).toJSON()
        expect(redButton).toMatchSnapshot();
    })


    it('renders the mock info, and the length of the typography', () => {
        expect(ReactWrapper.find(Typography)).toHaveLength(1);
        let wrapper = ReactWrapper.props().mockInfo.title
        expect(wrapper).toEqual(mockInfo.title)        
    })

})