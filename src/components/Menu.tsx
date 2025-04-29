import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li>jsonplaceholder</li>
            <li><Link to={"users/jsonplaceholder"}>users/jsonplaceholder</Link></li>
            <li><Link to={"posts/jsonplaceholder"}>posts/jsonplaceholder</Link></li>
            <li><Link to={"comments/jsonplaceholder"}>comments/jsonplaceholder</Link></li>
            <li>dummyjson</li>
            <li><Link to={"users/dummyjson"}>users/dummyjson</Link></li>
            <li><Link to={"posts/dummyjson"}>posts/dummyjson</Link></li>
            <li><Link to={"comments/dummyjson"}>comments/dummyjson</Link></li>
        </ul>
    );
};

export default Menu;