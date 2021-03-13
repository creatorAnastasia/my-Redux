import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = (props) => {
  return (<nav className={cl.nav}>
    <div className={cl.item}>
      <NavLink to='/profile' activeClassName={cl.activeLinc}>Profile</NavLink>
    </div>
    <div className={cl.item}>
      <NavLink to='/dialogs' activeClassName={cl.activeLinc}>Messages</NavLink>
    </div>
  </nav>
  )
}
 export default Navbar;