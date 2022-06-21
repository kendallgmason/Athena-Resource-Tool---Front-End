import React from 'react'
import { NavLink } from '../Navlink/index'

export function NavBar() {
  return (
    <nav>
      <ul className='navlist'>
        <NavLink LinkName={"HTML/CSS"}/>
        <NavLink LinkName={"JavaScript"}/>
        <NavLink LinkName={"React"}/>
      </ul>
    </nav>
  )
}

export default NavBar;