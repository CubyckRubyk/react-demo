import React, {useEffect, useState} from 'react';

function Rockets() {
    const [rockets, setRockets] = useState();
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
    }))
    return (
        <div></div>
    );
}

export {Rockets};