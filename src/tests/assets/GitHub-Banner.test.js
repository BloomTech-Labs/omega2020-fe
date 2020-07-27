import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Banner from '../../components/assets/GitHub-Banner';
import Adapter from 'enzyme-adapter-react-16';
import { Typography, IconButton, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

configure({ adapter: new Adapter() });

describe('the Github banner ', () => {
  const ReactWrapper = shallow(<Banner />);
  
  const renderGitBanner = renderer.create(<Banner />); 
  const rootGitBanner = renderGitBanner.root;

  it('snapshot the components', () => {
    const banner = renderer.create(<Banner />).toJSON();
    expect(banner).toMatchSnapshot();
  });

  it('renders the material ui length correctly, and the text content', () => {
    expect(ReactWrapper.find(Typography)).toHaveLength(1);
    expect(ReactWrapper.find(Typography).text()).toEqual(' Find us on GitHub');
    expect(ReactWrapper.find(IconButton)).toHaveLength(1);
    expect(ReactWrapper.find(GitHubIcon)).toHaveLength(1);
    expect(ReactWrapper.find(Box)).toHaveLength(3);
  });

  it('shows the props in the GitHubIcon', () => {
    expect(rootGitBanner.findByType(GitHubIcon).props.style).toMatchObject({"fontSize": 40, "padding": 20});
  })
});
