import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='lazy-nav'>
            <NavLink to='/'> Home</NavLink>
            <NavLink to='/about'> About Us</NavLink>
            <NavLink to='contact'> Contact Us</NavLink>
        </nav>
    </div>
  )
}

export default Navbar