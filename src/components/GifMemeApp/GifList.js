import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import PropTypes from 'prop-types';

export const GifList = ({category}) => {

    const {data,loading} = useFetchGif( category );

    return (
        <div>
            <div className="panel-block">
                <h4 className="title is-4 animate__animated animate__fadeInDown"> {category} </h4>
                {loading && <div className="spinner"></div>}
            </div>
            <div className="img-thumbnail-container">
                {data.map(image => ( 
                    <img src={image.url} alt={image.title} key={image.id} className="img-thumbnail  animate__animated animate__fadeInUp"/>
                ))}
            </div>
        </div>
    )
}

GifList.propTypes = {
    category: PropTypes.string.isRequired
}