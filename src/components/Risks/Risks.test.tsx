import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Risks from './Risks';

configure({ adapter: new Adapter() });

describe('<Risks/>', () => {
    describe('HTML structure', () => {
        it('should render Risks', () => {
            const wrapper = shallow(<Risks/>);
            expect(wrapper.find('.risks')).to.have.length(1);
            expect(wrapper.find('Bootstrap(Table)')).to.have.length(1);
            expect(wrapper.find('thead')).to.have.length(1);
            expect(wrapper.find('th')).to.have.length(3);
            expect(wrapper.find('tbody')).to.have.length(1);
        });
    })
});