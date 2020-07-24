import React from 'react';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Button from '../../components/assets/BlueButton';
import Adapter from 'enzyme-adapter-react-16';
import { Typography } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('the blue button content', () => {
  const mockInfo = {
    title: 'GitHub',
    href: 'https://github.com/Lambda-School-Labs/omega2020-fe',
  };

  const ReactWrapper = mount(<Button mockInfo={mockInfo}/>);
  const instanceWrapper = ReactWrapper.instance()

  it('snapshot the components', () => {
    const button = renderer.create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('shows the instance to be null since there"s no state', () => {
    expect(instanceWrapper).toBe(null)
  })

  it('renders the mock info, and the length of the typography', () => {
    expect(ReactWrapper.find(Typography)).toHaveLength(1);
    expect(ReactWrapper.props().mockInfo.title).toEqual(mockInfo.title)
    expect(ReactWrapper.props().mockInfo.href).toEqual(mockInfo.href)

  });
});
