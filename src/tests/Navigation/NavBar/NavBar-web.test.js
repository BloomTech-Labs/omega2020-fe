import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import { CardHeader, Box, Typography, Link } from '@material-ui/core';
import NavWeb from '../../../components/Navigation/NavBar/NavBar-web';
import Logo from '../../../images/omega-logo.png';

configure({ adapter: new Adapter() });


describe('the length of the material ui and match the snapshot of the foot mobile component', () => {

    const wrapper = mount(<NavWeb />)

    it('snapshot the component', () => {
        const navShot = renderer.create(<NavWeb />).toJSON();
        expect(navShot).toMatchSnapshot();
    })

    it('render the length of the material ui', () => {
        expect(wrapper.find(CardHeader).length).toEqual(8);
        expect(wrapper.find(Typography).length).toEqual(17);
        expect(wrapper.find(Box).length).toEqual(7);
        expect(wrapper.find(Link).length).toEqual(6);
    })

    it('render the image in the component', () => {
        expect(wrapper.find('img').prop('src')).toEqual(Logo)
    })

    it('renders all the text contents in the component', () => {
        expect(wrapper.containsMatchingElement(
        <Typography>
            SUDOMEGA
        </Typography>)
        ).toBeTruthy();
        
        expect(wrapper.containsMatchingElement(
            <Typography>
                About Us
            </Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>
                Get Started
            </Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>
                Archive
            </Typography>
        )).toBeTruthy();

        expect(wrapper.containsMatchingElement(
            <Typography>
                Leaderboard
            </Typography>
        )).toBeTruthy();

    })

    it('checks the composite component', () => {
        class Component extends React.Component {
            render() {
                return(
                    <WhiteButton title={'play'} href={'/coming-soon'} />
                )
            }
        }

        const WhiteButton = () => {
            return <button />
        }

        const compRender = renderer.create(<Component />);
        const compJson = compRender.toJSON();           // Checks the JSON
        const compRoot = compRender.root;               // Checks the root
        const compTree = compRender.toTree();           // Checks the tree


        expect(compJson).toEqual({ type: 'button', props: {}, children: null })
        expect(compRoot.findByType(WhiteButton).props).toMatchObject({"href": "/coming-soon", "title": "play"})
        expect(compTree.instance).toBeInstanceOf(Component)

    })

})