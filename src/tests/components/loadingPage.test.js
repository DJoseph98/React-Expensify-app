import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/loadingPage';

test('loadingPage view', () => {
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});