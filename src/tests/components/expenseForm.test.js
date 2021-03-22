import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expenseForm';
import tabExpenses from '../fixtures/expenses';
import moment from 'moment';

test('should be form page without data', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should be form page with data', () => {
    const wrapper = shallow(<ExpenseForm expense={tabExpenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

/*test si erreur submission*/
test('invalid form submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', { // trouve et simule le submit du form
        preventDefault: () => { // génère un fake event pour passer le preventDefault

        }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0); //regarde si le state de error est différent de 0
    expect(wrapper).toMatchSnapshot();
});

test('should test description change', () => {
    const value = 'hello';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { // find input, récupère le 1er élément avec at() et simule le onChange
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should test textarea change', () => {
    const value = 'hello';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should test valid price change', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('price')).toBe(value);
});

test('should test wrong price change', () => {
    const value = '12.136';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('price')).toBe(''); //default valuesw
});

test('should test submit value from form', () => {
    const onSubmitSpy = jest.fn(); //construit une fonction d'espionnage
    const wrapper = shallow(<ExpenseForm expense={tabExpenses[1]} onSubmit={onSubmitSpy} />); //charge des données dans le form et appelle la fonction d'espionnage pour vérification
    wrapper.find('form').simulate('submit', { // trouve et simule le submit du form
        preventDefault: () => { // génère un fake event pour passer le preventDefault
        }
    });
    expect(wrapper.state('error')).toBe(''); // vérifie que pas d'erreur de saisie
    expect(onSubmitSpy).toHaveBeenLastCalledWith({ //test quel arguments on été passé en dernier
        description: tabExpenses[1].description,
        price: tabExpenses[1].price,
        createdAt: tabExpenses[1].createdAt,
        note: tabExpenses[1].note
    });
});

test('shoud test onDateChange', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now); // appelle la fonction et passe en paramètre de fonction now//// utilisé pour les childrens
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('shoud test onFocusChange', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
