import { getGif } from '../../components/GifMemeApp/helpers/GifsProvider';

describe('Fetch Gif provider test', ()=> {
    test('should get 20 gifs elements from Ghiphy API', async () => {
        const gifColection = await getGif('Goku');

        expect(gifColection.length).toBe(20);
    });
    test('should recive a prop', async () => {
        const gifColection = await getGif('');

        expect(gifColection.length).toBe(0);
    }); 
});