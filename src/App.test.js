import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MemoryRouter from 'react-router-dom';


import App from './App';

test('There is Omega2020 in the app', () => {
    expect('Omega2020').toMatch(/meg/);
});

