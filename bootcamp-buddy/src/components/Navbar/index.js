import React from 'react'
import { NavLink } from '../Navlink/index'

export function NavBar() {
  return (
    <nav>
      <ul className='navlist'>
      
       <li><NavLink LinkName={"Articles"}/></li> 
        
        <li><NavLink LinkName={"Videos"}/></li>
        
      </ul>
    </nav>
  )
}

export default NavBar;