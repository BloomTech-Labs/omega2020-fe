import React from 'react';
import {render, screen} from '@testing-library/react';
import {mount, configure, shallow} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Card1 from '../components/InstructionsPage/Card1';
import Adapter from 'enzyme-adapter-react-16';
import puzzle4x4_s from '../images/game_4x4small.png'
import Button from '@material-ui/core/Button';


configure({adapter: new Adapter()})

describe('image', () => {
    it('renders the image with src', () => {
        const img = shallow(<Card1/>)
    })
})

it('renders card1', () => {
    const firstInstruction = render(
        <Card1 /> 
    );

    const h3 = firstInstruction.queryByText(/Let’s start off with something easy/i, {exact: false});
    expect(h3).toBeInTheDocument();
    expect(h3).toBeVisible();

    const h5 = firstInstruction.queryByText(/Try to solve this 4x4 sudoku:/i)
    expect(h5).toBeInTheDocument();
    expect(h5).toBeVisible();

    const classes = firstInstruction.getByText(/Each row, column and square needs to be filled out with the numbers 1-4, without repeating any numbers within the row, column or square./i)
    expect(classes).toBeVisible();
    expect(classes).toBeInTheDocument();

    const firstAlt = firstInstruction.getByAltText(/game1/i)
    expect(firstAlt).toBeVisible()
    expect(firstAlt).toBeInTheDocument()
    
    const secondAlt = firstInstruction.getByAltText(/game2/i)
    expect(secondAlt).toBeInTheDocument()
    
    
    firstInstruction.getByText(/Instructions:/i).toBeInTheDocument

    screen.debug(screen.getByText(/box/i));
    
});


