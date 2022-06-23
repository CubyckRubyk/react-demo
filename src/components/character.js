import React from 'react';

function Character(props) {
    const {id, name,status,species, gender, image, alt} = props;
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt={alt}/>

        </div>
    );
}

export default Character;