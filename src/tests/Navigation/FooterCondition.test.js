import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import FooterWeb from '../../components/Navigation/Footer/Footer-web'
import useMediaQuery from '@material-ui/core/useMediaQuery';

configure({ adapter: new Adapter() });

describe('', () => {
    it('', () => {
        const Condition = () => {
            const viewPort = false;
            const sm = useMediaQuery('(min-width: 980px)');
            
            if (viewPort === sm) {
                return null
            } else {
                return <FooterWeb />;
            }
        }; 
        
        const condRender = renderer.create(<Condition />)
        const condJson = condRender.toJSON()
    //  const condRoot = condRender.root;
      
        expect(condJson).toBeNull();
    
      
    //   console.log(condRoot)
      

    })
})