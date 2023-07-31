import React from 'react'
import logo from "../../assets/Laserpay_logo.png"
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logoDiv'>
            <img src={logo} className='logoImg' alt="" />
            <span>Laserpay</span>
        </div>
        <div className='profileDiv'>
            <FontAwesomeIcon icon={faBell} className='bell' />
            <img className='profileImg' src={logo} alt="" />
        </div>
    </div>
  )
}

export default Navbar