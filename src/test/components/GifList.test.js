import { shallow } from 'enzyme';
import React from 'react';
import { GifList } from '../../components/GifMemeApp/GifList';
import { useFetchGif } from '../../components/hooks/useFetchGif';
jest.mock('../../components/hooks/useFetchGif');

describe('GifList component test', () => {
    const categoryTest = 'goku';
    useFetchGif.mockReturnValue({ data: [], loading: true});
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

    test('should to show images using useFetchGif hook', () => {
        const gifs = [{ id: '1234', url: 'https://localhost/something.com', title: 'something'}];
        useFetchGif.mockReturnValue({ data: gifs, loading: false});
        const wrapper = shallow(<GifList category={categoryTest}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('div').at(2).hasClass('spinner')).toBeFalsy();
    });
    
});