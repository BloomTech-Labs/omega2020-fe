import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import SoonPage from '../components/soonPage/soon'
import Adapter from 'enzyme-adapter-react-16';
import Sudoku from '../components/soonPage/sudoku.jpg'


configure({ adapter: new Adapter() })


it('renders all tags length', () => {
    const soonPage = shallow(
        <SoonPage />
    );

    expect(soonPage.find("div").length).toEqual(1)
    expect(soonPage.find("section").length).toEqual(1)
    expect(soonPage.find("h1").length).toEqual(2)
    expect(soonPage.find("p").length).toEqual(4)
})

describe('all elements', () => {
    const soonPage = shallow(
        <SoonPage />
    );

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
                <p className="secondFont">Omega 2020 sudoku is </p>
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

    it('renders the fourthFont element', () => {
        expect(
            soonPage.containsMatchingElement(
                <p className="fourthFont"> In the meantime <b>subscribe</b> to get alerted when the game is available </p>
            )
        ).toBeTruthy()
    })

    it('renders the subscribe element', () => {
        expect(
            soonPage.containsMatchingElement(
                <p className="sub"> subscribe </p>
            )
        ).toBeTruthy()
    })

    it('renders the learn element', () => {
        expect(
            soonPage.containsMatchingElement(
            <p className="learn"> learn how to play! </p>
            )
        ).toEqual(true)
    })
})

describe('renders the image info such as alt and the src', () => {
    const soonPage = shallow(
        <SoonPage />
    );

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
    expect(getByTestId('sudo-fourthFont')).toHaveClass('fourthFont');
    expect(getByTestId('sudo-button')).toHaveClass('button');
    expect(getByTestId('sudo-sub')).toHaveClass('sub');
    expect(getByTestId('sudo-learn')).toHaveClass('learn')

})