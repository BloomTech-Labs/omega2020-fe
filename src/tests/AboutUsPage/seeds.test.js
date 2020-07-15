import React from 'react';
import { render } from '@testing-library/react';
import  { configure, shallow, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Seeds from '../../components/AboutUsPage/seeds';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai'

configure({ adapter: new Adapter() });

it('should exist', () => {
    assert.isDefined(Seeds)
})

it('renders the info in the seeds', () => {

    const wrapper = shallow(<Seeds /> )

})