import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Machines from './Machines';

configure({ adapter: new Adapter() });

describe('<Machines/>', () => {
    describe('HTML structure', () => {
        it('should render Machines', () => {
            const wrapper = shallow(<Machines/>);
            expect(wrapper.find('.machines')).to.have.length(1);
            expect(wrapper.find('Bootstrap(Table)')).to.have.length(1);
            expect(wrapper.find('thead')).to.have.length(1);
            expect(wrapper.find('th')).to.have.length(3);
            expect(wrapper.find('tbody')).to.have.length(1);
        });
    })
});