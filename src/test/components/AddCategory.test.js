import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/GifMemeApp/AddCategory';

describe('AddCategory component test', () => {
    const setCategories = jest.fn();
    const value = 'Goku';
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } /> );
    });

    test('should to show AddCategory component without issues', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should to change the input text box', () => {
        wrapper.find('input').simulate('change', { target: { value } });
    });

    test('should not to post the info with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should to call setCategories and reset the input', () => {
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});