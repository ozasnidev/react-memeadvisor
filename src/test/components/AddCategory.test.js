import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/GifMemeApp/AddCategory';

describe('AddCategory component test', () => {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories } /> );

    test('should to show GifList component without issues', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should to change the input text box', () => {
        const testedInput = wrapper.find('input');
        const value = 'Goku';

        testedInput.simulate('change', { target: { value } });
    });
});