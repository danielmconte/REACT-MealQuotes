import React from 'react';
import {Link} from 'react-router-dom';

const LeftoverPizza = () => {
    return (
        <>
        <h1>"Leftover Pizza, you are my one true love"</h1>
        <h2>    --Kurt Cobain</h2>
        <img src="https://images.firstwefeast.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/cuq5dofooedtkbsmwr8z.jpg"></img>
        <h3><Link to = "/">Go Home</Link></h3>
        </>
    )
}

export default LeftoverPizza;