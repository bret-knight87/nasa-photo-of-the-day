import React from 'react';
import styled from 'styled-components';

const NasaImg = styled.img`
    width: 50%;
    height: auto;
`;

const NasaPhotoMaker = props => {
    const PhotoTitle = styled.h2`
        color: red;
    `;

    return (
        <div>
            <PhotoTitle>{props.title}</PhotoTitle>
            <NasaImg alt='NASA POTD' src={props.imgUrl}></NasaImg>
        </div>
    )
}

export default NasaPhotoMaker;