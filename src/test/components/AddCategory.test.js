import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/GifMemeApp/AddCategory';

describe('AddCategory component test', () => {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories } /> );

    test('should to show GifList component without issues', () => {
        expect(wrapper).toMatchSnapshot();
    });
});