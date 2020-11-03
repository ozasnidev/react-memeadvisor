import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/GifMemeApp/AddCategory';

describe('AddCategory component test', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } /> );
    });

    test('should to show GifList component without issues', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should to change the input text box', () => {
        const testedInput = wrapper.find('input');
        const value = 'Goku';

        testedInput.simulate('change', { target: { value } });
    });

    test('should not to post the info with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).not.toHaveBeenCalled();
    });
});