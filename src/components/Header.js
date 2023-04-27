import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isMobile, setIsmobile] = useState(false);
  return (
    <div className='header'>
      <h1>VisionHost</h1>

      <nav className={isMobile?"active-nav": ''}>
        <NavLink to={'/'} onClick={()=>{setIsmobile(!isMobile)}}>Home</NavLink>
        <NavLink to={'/about_us'} onClick={()=>{setIsmobile(!isMobile)}}>WordPress</NavLink>
        <NavLink to={'/our_services'} onClick={()=>{setIsmobile(!isMobile)}}>Hosting</NavLink>
        <NavLink to={'/contact_us'} onClick={()=>{setIsmobile(!isMobile)}}>Domains</NavLink>
        <NavLink to={'/sign_up'} onClick={()=>{setIsmobile(!isMobile)}}>Sign Up</NavLink>
      </nav>

      <div id="mobile">
        <button onClick={()=>{setIsmobile(!isMobile)}}><i className={isMobile?"fa-solid fa-xmark":"fa-solid fa-bars"}></i></button>
      </div>
    </div>
  )
}

export default Header
