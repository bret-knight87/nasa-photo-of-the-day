import React from 'react';

const NasaPhotoMaker = props => {
    return (
        <div>
            <div>{props.title}</div>
            <img alt='NASA POTD' src={props.imgUrl}></img>
        </div>
    )
}

export default NasaPhotoMaker;