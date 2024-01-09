import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navabar = () => {
  return (
    <div>
      <nav className='nav-container'>
       <NavLink to='/'>  Home</NavLink>
       <NavLink to='/about'> About Us</NavLink>
       <NavLink to='/contact'> Contact Us</NavLink>
       <NavLink to='/projects'> Projects</NavLink>
       <NavLink to='/users'>  Users</NavLink>
              
      </nav>
    </div>
  )
}

export default Navabar
