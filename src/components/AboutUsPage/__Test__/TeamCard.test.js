import React from 'react';
import { render } from '@testing-library/react';
import  { configure, shallow, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import List from '../TeamCard';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

configure({ adapter: new Adapter() });

describe('the components', () => {

    let wrapper;
        beforeEach(() => { wrapper = shallow(<List />)});
        
        it.skip('renders the snapshot', () => {
            const wrapper = renderer.create(<List />).toJSON();
            expect(wrapper).toMatchSnapshot();
        })
        
        it.skip('check if the compnonent exist', () => {
        expect(wrapper.exists()).toBe(true);
        });


        it('checks the length of the material ui', () => {
            const wrapper = mount(<List />)
            expect(wrapper.find(Box)).toHaveLength(2)
            expect(wrapper.find(Avatar)).toHaveLength(1)
            expect(wrapper.find(Popper)).toHaveLength(1)
        })
      
})

