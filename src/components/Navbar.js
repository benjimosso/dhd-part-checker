import React from 'react'

//style and images
import './Navbar.css'
import DhdLogo from '../assets/DhdLogoTransparency.png'

export default function Navbar() {
  
  
    return (
        <div className='navbar'>
        <ul>
          <li className='logo'>
            <img src={DhdLogo} alt="dhdLogo" />
            <span>DHD Part Checker</span>
          </li>
        </ul>
      </div>
  )
}
