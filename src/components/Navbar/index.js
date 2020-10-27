import React from 'react';
import style from './navbar.module.scss'
export const Navbar = () => {
  return(
    <div className={style.navbar}>
      <a className={style.active} href="#"><i className="fa fa-fw fa-home"></i> Home</a> 
      <a href="#"><i className="fa fa-fw fa-search"></i> Search</a> 
      <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a> 
      <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
    </div>
  )
}