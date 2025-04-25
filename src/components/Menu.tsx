import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
          <ul>
              <li><Link to={'/users'} >users</Link></li>
              <li><Link to={'/comments'} >comments</Link></li>
              <li><Link to={'/products'} >products</Link></li>
              <li><Link to={'/posts'} >posts</Link></li>
          </ul>
        </div>
    );
};

export default Menu;