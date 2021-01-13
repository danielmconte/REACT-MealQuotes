import React from 'react';
import {Link} from 'react-router-dom';

const Muffin = () => {
    return (
        <>
        <h1>"There is nothing more beautiful than a good muffin in the morning"</h1>
        <h2>    --Audrey Hepburn</h2>
        <img src="https://cms.qz.com/wp-content/uploads/2018/07/AP_620113045-e1532440459970.jpg?quality=75&strip=all&w=1900&h=1068"></img>
        <h3><Link to = "/">Go Home</Link></h3>
        </>       
    )
}

export default Muffin;