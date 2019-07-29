import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  describe('HTML structure', () => {
    it('should render App', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('.App')).to.have.length(1);
      expect(wrapper.find('Bootstrap(ProgressBar)')).to.have.length(1);
      expect(wrapper.find('ForwardRef')).to.have.length(1);
      expect(wrapper.find('Tab')).to.have.length(2);
      expect(wrapper.find('Risks')).to.have.length(1);
      expect(wrapper.find('Machines')).to.have.length(1);
    });
  })
});
