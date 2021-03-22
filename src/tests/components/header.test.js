import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow'; // lib permet de tester template component
import Header from '../../components/header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'; //lib permet de réduire au strict nécéssaire ce qui est générer dans le snapshot

test('should render header correctly', () => {
    /* // le test passera toujours la première fois car c'est le moment ou il génère le template à comparer
    const renderer = new ReactShallowRenderer(); // créer template a comparer
    renderer.render(<Header/>); //génère template a comparer
    expect(renderer.getRenderOutput()).toMatchSnapshot(); // test les deux templates */

    const wrapper = shallow(<Header />);
    //expect(toJSON(wrapper)).toMatchSnapshot();
    expect(toJSON(wrapper)).toMatchSnapshot();
});
