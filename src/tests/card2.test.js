import React from 'react';
import {render} from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import InstructionPage from '../components/InstructionsPage/Card2/Card2';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

it('renders debugs/show/console.log() the wrapper content', () => {
    const wrapper = render(
        <InstructionPage />
    );
})

describe('it shows all the tags length and it className', () => {
    const tags = shallow(
        <InstructionPage />
    );



    it('it render the length of the paragraph tag and it"s className ', () => {  
        const { getByTestId } = render(
            <InstructionPage />
        )

        //  The First Paragraph tag

        const cancelCard = getByTestId('cancel-card')   //makes it easier to call getByTestId for the specific tag
        expect(tags.find('p').length).toEqual(7);       //length of the tag
        expect(cancelCard).toHaveTextContent('X');      //content in the tag
        expect(cancelCard).toHaveClass('cancel');       //class in the tag
        expect(cancelCard).not.toBeEmpty();             //tag is not empty

        // The Second Paragraph tag

        const botCard = getByTestId('bot-card')
        expect(botCard).toHaveClass('bot');
        expect(botCard).toHaveTextContent('Each row, column and square needs to be filled out with the numbers 1-6, without repeating any numbers within the row, column or square.');
        expect(botCard).not.toBeEmpty();
        expect(botCard).toBeInTheDocument();

        // The Third paragraph tag

        const bottomCard1 = getByTestId('bottom-card1')
        expect(bottomCard1).toHaveClass('bottom');
        expect(bottomCard1).not.toBeEmpty();
        expect(bottomCard1).toBeInTheDocument();
        expect(bottomCard1).toHaveTextContent('1. In the light blue box enter the number 6.');
        
        // The Fourth paragraph tag

        const bottomCard2 = getByTestId('bottom-card2')
        expect(bottomCard2).toHaveClass('bottom');
        expect(bottomCard2).not.toBeEmpty();
        expect(bottomCard2).toHaveTextContent('2. In the next light blue box enter the number 5.');


        // Fifth Paragraph Tag

        const bottomCard3 = getByTestId('bottom-card3')
        expect(bottomCard3).toHaveClass('bottom');
        expect(bottomCard3).not.toBeEmpty();
        expect(bottomCard3).toHaveTextContent('Try to complete the rest… you got this!')

        // Sixth Paragraph Tag

        const bottomCard4 = getByTestId('help-card')
        expect(bottomCard4).toHaveClass('help');
        expect(bottomCard4).not.toBeEmpty();
        expect(bottomCard4).toHaveTextContent('Need more help?');
    
        // Seventh Paragraph Tag

        const bottomCard5 = getByTestId('answer-card')
        expect(bottomCard5).not.toBeEmpty()
        expect(bottomCard5).toBeInTheDocument();
        expect(bottomCard5).toHaveClass('answer');
        expect(bottomCard5).toHaveTextContent('REVEAL NEXT ANSWER')
    });

    it('it render the length of the h1 tag', () => {
        expect(tags.find('h1').length).toEqual(0);
    });
    
    it('it render the length of the h2 tag', () => {
        const { getByTestId } = render(
            <InstructionPage />
        );

        //First h2 tag
 
        const startCard = getByTestId('start-card')

        expect(tags.find('h2').length).toEqual(3);
        expect(startCard).toHaveClass('start');
        expect(startCard).toHaveTextContent("Let's kick it up a notch");
        expect(startCard).not.toBeEmpty();

        // second h2 tag

        const backCard = getByTestId('back-card')

        expect(backCard).toHaveClass('back');
        expect(backCard).toHaveTextContent("BACK");
        expect(backCard).not.toBeEmpty();


        // Third h2 tag

        const nextCard = getByTestId('next-card')

        expect(nextCard).toHaveClass('next');
        expect(nextCard).toHaveTextContent("NEXT");
        expect(nextCard).not.toBeEmpty();
    });

    it('it render the length of the h3 tag', () => {
        expect(tags.find('h3').length).toEqual(0);

    });

    it('it render the length of the h4 tag', () => {
        expect(tags.find('h4').length).toEqual(0)
    });


    it('it render the length of the h5 tag', () => {
        expect(tags.find('h5').length).toEqual(3)
    });


    it('it render the length of the div tag', () => {
        expect(tags.find('div').length).toEqual(7)
    });


    it('it render the length of the section tag', () => {
        expect(tags.find('section').length).toEqual(1)
    });


    it('it render the length of the image tag', () => {
        expect(tags.find('img').length).toEqual(1)
    });
});

