import React from 'react';
import {Link} from 'react-router-dom';

const Cereal = () => {
    return (
        <>
        <h1>"Cereal for dinner! Every night!"</h1>
        <h2>    --Harry S. Truman</h2>
        <img src="https://i.insider.com/5751b08152bcd023008c6d04?width=800&format=jpeg&auto=webp"></img>
        <h3><Link to = "/">Go Home</Link></h3>
        </>
    )
}

export default Cereal;