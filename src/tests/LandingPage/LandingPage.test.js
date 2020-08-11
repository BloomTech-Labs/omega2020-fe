import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../../components/LandingPage/HomePage';
import Banner from '../../components/LandingPage/Banner';
import GameSimulation from '../../components/LandingPage/GameSimulation';
import LandingPage from '../../components/LandingPage/LandingPage';

configure({ adapter: new Adapter() });

describe('the landing page info', () => {
    const page = mount(<LandingPage />);
    
    const renderPage = renderer.create(<LandingPage />);
    const rootPage = renderPage.root;

    it('snapshot the components', () => {
        const shot = renderer.create(<LandingPage />).toJSON();
        expect(shot).toMatchSnapshot();
    })

    it('checks the props in the HomePage component, the length of the GameSimulation, and Banner component ', () => {
        expect(page.find(HomePage).length).toEqual(1);
        expect(page.find(Banner).length).toEqual(1);
        expect(page.find(GameSimulation).length).toEqual(1);

        expect(rootPage.findByType(HomePage).props.theme).toBe(undefined)
    })
})