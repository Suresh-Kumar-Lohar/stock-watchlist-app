import React from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.navList}>
        <li>
          <NavLink activeClassName={classes.active} to='/home'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to='/watchlist'>
            WatchList
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
