import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
    
    <nav>
        <NavLink to='/projects/feature'> Feature Projects</NavLink><br/>
        <NavLink to='/projects/new'> New Projects</NavLink>
    </nav>
    <Outlet/>
    
    </div>
  )
}

export default Projects