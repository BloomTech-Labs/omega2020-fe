import React from 'react';
import { render } from '@testing-library/react';
import  { configure, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import List from '../../components/AboutUsPage/TeamCard';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('the components', () => {

    let wrapper;
        beforeEach(() => { wrapper = shallow(<List />)});
        
        it('renders the snapshot', () => {
            const wrapper = renderer.create(<List />).toJSON();
            expect(wrapper).toMatchSnapshot();
        })
        
        it('check if the compnonent exist', () => {
        expect(wrapper.exists()).toBe(true);
        });

      
})

