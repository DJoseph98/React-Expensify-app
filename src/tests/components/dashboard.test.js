import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/dashboard';

test('should be dashboard page', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
