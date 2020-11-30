import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const Menu=()=>{
    return(
        <>
        <div className="heading">
        <NavLink exact activeClassName="active" to='/'> About </NavLink>
        <NavLink exact activeClassName="active" to='/contact'> Contact </NavLink>
        <NavLink exact activeClassName="active" to='/search'> Search </NavLink>
        </div>
        </>
    );
}

export default Menu;