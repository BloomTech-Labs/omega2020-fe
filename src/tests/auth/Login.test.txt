import React from 'react';
import { render, screen } from '@testing-library/react';
import  { configure, shallow, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Login from '../../components/auth/Login';
import Adapter from 'enzyme-adapter-react-16';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

configure({ adapter: new Adapter() });

const server = setupServer(
    rest.post('/auth/login', (req, res, ctx) => {
        return  res(ctx.json({ Authorization: token }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('allows user to login', async () => {
    render(<Login />)

    userEvent.type(
        screen.getByLabelText('textbox', { name: /Email Address/i }), 'adenijitosin112@gmail.com',

    )

    userEvent.type(
        screen.getByLabelText('textbox', { password: /Password/i }), 'bangbang',

    )

    userEvent.click(
        screen.getByText(/Lets Play!/i)
    )

    expect(window.sessionStorage.getItem('token')).toEqual('JF')

})