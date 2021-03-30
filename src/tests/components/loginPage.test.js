import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/loginPage';
import { MemoryRouter } from 'react-router-dom';

test('should be LoginPage page', () => {
    const wrapper = shallow(<MemoryRouter><LoginPage /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled(); //check si fonction appeler
});