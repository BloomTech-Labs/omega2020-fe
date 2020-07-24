import React from 'react';
import { render } from '@testing-library/react';
import  { configure } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Seeds from '../../components/AboutUsPage/seeds';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should exist', () => {
    assert.isDefined(Seeds)
})

