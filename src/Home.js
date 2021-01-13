import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
        <h1>There's no wrong choice:</h1>
        <h2><Link to = "/pizza">Leftover Pizza</Link></h2>
        <h2><Link to = "/muffin">Muffin</Link></h2>
        <h2><Link to = "/cereal">Cereal</Link></h2>
        </>
    )

}

export default Home;