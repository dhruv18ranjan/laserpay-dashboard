import React from 'react'
import profile from "../../assets/profile.png"
import logo from "../../assets/Laserpay_logo.png"
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logoDiv'>
          <Link to="/" style={{margin:"0px",cursor:"pointer"}}>
            <img src={logo} className='logoImg' alt="" />
          </Link>
            <span>Laserpay</span>
        </div>
        <div className='profileDiv'>
            <FontAwesomeIcon icon={faBell} className='bell' />
            <img className='profileImg' src={profile} alt="" />
        </div>
    </div>
  )
}

export default Navbar