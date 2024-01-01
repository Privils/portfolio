import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
  <nav>
    <ul>
      <li>
       <Link to='/portfolio'>Home</Link>     
        </li>
      <li>
     <Link to='Projects'>Projects</Link>
      </li>
      <li>
       <Link to='Contact'>Contact</Link>
      </li>
      <li>
       <Link  to='Aboutme'>Aboutme</Link>
      </li>
    </ul>
  </nav>
</header>
<main>
    <Outlet />
</main>
    </>
  )
}

export default Header
