import React, {useEffect, useState} from 'react';
import {Rocket} from "./Rocket";


function Rockets() {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setRockets(value.filter(value => value.lanch_year !== '2020')))
    }, []);
    return (
        <div>
            {rockets.map((rocket, index) => <Rocket key={index} item={rocket}/>)}
        </div>
    );
}

export {Rockets};