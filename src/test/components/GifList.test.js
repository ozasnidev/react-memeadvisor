import { shallow } from 'enzyme';
import React from 'react';
import { GifList } from '../../components/GifMemeApp/GifList';

describe('GifList component test', () => {
    const categoryTest = 'goku';
    const wrapper = shallow(<GifList category={categoryTest}/>);
    
    test('should to show GifList component without issues', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should to have a h4 tag with a right title', () => {
        const h4Tag = wrapper.find('h4');
        expect(h4Tag.text().trim()).toBe(categoryTest);
    });
    test('should to contain <div className="img-thumbnail-container">', () => {
        expect(wrapper.find('div')
            .at(3)
            .hasClass('img-thumbnail-container'))
                .toBeTruthy();
    });
});