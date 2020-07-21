import React from 'react';
import { render } from '@testing-library/react';
import  { configure, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from '../../components/AboutUsPage/AboutUs';
import Adapter from 'enzyme-adapter-react-16';
import { Box, CardHeader, Typography } from '@material-ui/core/';
import { createMount } from '@material-ui/core/test-utils';
import renderer from 'react-test-renderer'


configure({ adapter: new Adapter() });

describe('The content in the AboutUs component', () => {
    const info = shallow(<AboutUs/>)

    it('Makes a snapshot of the component', () => {
        const aboutUsPage = renderer.create(<AboutUs />).toJSON()
        expect(aboutUsPage).toMatchSnapshot();
    })

    it('renders the typography elements, and contains matching element', () => {

        const mount =  createMount();
        const wrapper = mount(<AboutUs /> )

        //Core
        expect(wrapper.find(Box)).toHaveLength(48);
        expect(wrapper.find(CardHeader)).toHaveLength(5);
        expect(wrapper.find(Typography)).toHaveLength(10);
        expect(wrapper.containsMatchingElement(
            <Typography>About Sudomega</Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>Our Story</Typography>
        )).toBeTruthy()

        expect(wrapper.containsMatchingElement(
            <Typography>
                Sudomega started as a Lambda School Labs project, 
                meaning we were given an idea and told to run with it! 
                Currently we are the second team to work on Sudomega, 
                previously known as Omega2020. 
                Our goal is to bring Sudoku to everyone. 
                We want to make it easy and fun to learn while still 
                challenging more experienced users.
            </Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>About Our Teams</Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>
                An overview of the founding team and core contributors to Sudomega. 
                Teams are composed of Web Developers, Ux Designers, and Data Scientists. 
                Feel free to click on each members picture to learn more about them!
            </Typography>
        )).toBeTruthy();

    })

    it('checks if the title display', () => {
        
        const { getAllByTestId } = render(<AboutUs />);

        //h4 tag
        const head1 = getAllByTestId('head1');
        expect(head1[0].textContent).toBe('About Sudomega');
        expect(head1).toHaveLength(2)
        expect(head1).toBeTruthy()


        //h5 tag
        const head2 = getAllByTestId('head2');
        expect(head2).toHaveLength(4);
        expect(head2[0].textContent).toBe('Our Story');
        expect(head2[1].textContent).toBe('About Our Teams')


        const subhead = getAllByTestId('subheader');
        expect(subhead).toHaveLength(4);
        expect(subhead[0].textContent).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        expect(subhead[1].textContent).toBe('An overview of the founding team and core contributors to Omega 2020. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        

    })
})