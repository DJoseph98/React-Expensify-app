import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from '../../components/notFoundPage';

test('should be notFoundPage page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
