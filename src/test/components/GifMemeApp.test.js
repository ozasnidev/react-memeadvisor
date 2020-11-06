import { shallow } from 'enzyme';
import React from 'react';
import GifMemeApp from '../../components/GifMemeApp/GifMemeApp';

describe('GifMemeApo Component test', () => {

    test('should show the component without issues', () => {
        const wrapper = shallow(<GifMemeApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should show a category list', () => {
        const categoryMock = ['Donald Trump', 'Joe Biden'];
        const wrapper = shallow(<GifMemeApp defaultCategories = {categoryMock} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifList').length).toBe(categoryMock.length);
    });
    
});