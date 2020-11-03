import { useState,useEffect } from "react";
import { getGif } from "../GifMemeApp/helpers/GifsProvider";


export const useFetchGif = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { getGif(category)
        .then(images => {
            setTimeout(() => {
                setState({
                    data: images,
                    loading: false
                });
            },2000);
        })
    }, [category]);

    return state;
}
