export const getGif = async(category) => {
    const url = 
        `https://api.giphy.com/v1/gifs/search?api_key=dUz0ci3QOXupNeCAWKAR8AsrU4I6S2X1&q=${encodeURI(category)}&limit=20`;
    const response = await fetch(url);
    const {data}     = await response.json();
    const gifs = data.map(image => {
        return{
            id:image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    })
    return gifs;
};