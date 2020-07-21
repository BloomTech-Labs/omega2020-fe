import React from 'react';
import { render } from '@testing-library/react';
import  { configure, shallow, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import List from '../../components/AboutUsPage/TeamCard';
import Adapter from 'enzyme-adapter-react-16';
import { Box, Typography } from '@material-ui/core';
import { TeamV1, TeamV2 } from '../../components/AboutUsPage/seeds';

configure({ adapter: new Adapter() });

describe('the components', () => {
    const names = TeamV1.map(info => info.name)
    const image = TeamV1.map(info => info.image)

    let wrapper;
        beforeEach(() => { wrapper = shallow(<List TeamV1={TeamV1}/>)});
        
        it.skip('renders the snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })
        
        it.skip('check if the compnonent exist', () => {
        expect(wrapper.exists()).toBe(true);
        });

        it('check the names in the wrapper component', () => {
            const { getByTestId } = render(<List />)
            // expect(getByTestId('name')).toBeInTheDocument()
            expect(getByTestId('github').length).toEqual(4)

            // const Ui = mount(<List Box={Box}/>)
            // expect(Ui.find(Box).length).toEqual(4)


            // const names = wrapper.find("Box").find('name')
            // expect(names.text).toEqual('bang')
            // console.log(wrapper.findWhere(n => console.log(n)))
            // expect(wrapper.findWhere(n => n.name() === '' ))
            // expect(wrapper.find('[data-testid="name"]').first().text()).toEqual('sdj')

            // expect(wrapper.find('name').text()).toEqual(names)
            // const ReactWrapper = shallow(<List />)
            // const info = ReactWrapper.find('name');
            // console.log(info.debug())
            // expect(ReactWrapper.find('image')).toHaveLength(1)
        })

})

