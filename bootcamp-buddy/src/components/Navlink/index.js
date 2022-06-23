import React from 'react'

export function NavLink({LinkName}) {
  return (
    <li data-testid="navlink-test" className="navlink">
      {LinkName}
    </li>
  )
}
