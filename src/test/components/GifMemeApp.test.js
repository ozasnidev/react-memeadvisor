import { shallow } from 'enzyme';
import React from 'react';
import GifMemeApp from '../../components/GifMemeApp/GifMemeApp';

describe('GifMemeApo Component test', () => {
    const wrapper = shallow(<GifMemeApp />);

    test('should show the component without issues', () => {
        expect(wrapper).toMatchSnapshot();
    });
});