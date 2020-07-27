import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import SoonPage from '../../components/soonPage/soon';
import Adapter from 'enzyme-adapter-react-16';
import Sudoku from '../../components/soonPage/sudoku.png';
import BlueButton from '../../components/assets/BlueButton';

configure({ adapter: new Adapter() })

describe('all elements', () => {
    const soonPage = mount(
        <SoonPage />
    );

    it('snapshot the info of the soon page component', () => {
        const soonPageShot = renderer.create(<SoonPage />).toJSON();
        expect(soonPageShot).toMatchSnapshot();
      });

    it('renders firstFont element', () => {
        expect(
            soonPage.containsMatchingElement(
                <h1 className="firstFont"> WE KNOW YOU'RE EXCITED! </h1>
            )
        ).toBeTruthy()
    });

    it('renders the secondFont element', () => {
        expect(
            soonPage.containsMatchingElement(
                <p className="secondFont">Sudomega sudoku games are </p>
            )
        ).toBeTruthy()
    });

    it('renders the thirdFont element', () => {
        expect(
            soonPage.containsMatchingElement(
                <h1 className="thirdFont"> COMING SOON </h1>
            )
        ).toBeTruthy()
    })
})

describe('renders the image info such as alt and the src', () => {
    const soonPage = mount(
        <SoonPage />
    );

    const iSoonPage = soonPage.instance();

    it('renders all tags length', () => {
        const soonPage = shallow(
            <SoonPage />
        );
        expect(soonPage.find("div").length).toEqual(1)
        expect(soonPage.find("section").length).toEqual(1)
        expect(soonPage.find("h1").length).toEqual(2)
        expect(soonPage.find("p").length).toEqual(1)
    })


    it('renders the image', () => { 
        expect(soonPage.find("img").prop("src")).toEqual(Sudoku)
    })    

    it('renders the length of the image in the component', () => {
        expect(soonPage.find("img").length).toEqual(1)
    })
    
    it('renders the alt name', () => {
        const page = render(
            <SoonPage /> 
        );
        const alt = page.getByAltText(/sudoku/);
        expect(alt).toBeInTheDocument()
        expect(alt).toBeVisible()
        expect(alt).toBeTruthy()
    })

    it('shows button props', () => {
        const renderSoonPage = renderer.create(<SoonPage />); 
        const rootSoonPage = renderSoonPage.root;

        expect(rootSoonPage.findByType(BlueButton).props.title).toBe('learn how to play!')
        expect(rootSoonPage.findByType(BlueButton).props.href).toBe('/tutorial')


        expect(iSoonPage).toBe(null)
    })
})

it('render all className', () => {
    const { getByTestId } = render(
        <SoonPage />
    );
    expect(getByTestId('sudo-container')).toHaveClass('sudoku');
    expect(getByTestId('sudo-logo')).toHaveClass('sudoku-logo');
    expect(getByTestId('sudo-firstFont')).toHaveClass('firstFont');
    expect(getByTestId('sudo-secondFont')).toHaveClass('secondFont');
    expect(getByTestId('sudo-thirdFont')).toHaveClass('thirdFont');
    expect(getByTestId('sudo-button')).toHaveClass('button');
})