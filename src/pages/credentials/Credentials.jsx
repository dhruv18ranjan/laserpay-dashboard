import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import "./credentials.scss"
import { credentials } from '../../MenuData'

const Credentials = () => {
  return (
    <div className='credentialsDiv'>
        <Navbar />
        <Menu data={credentials} />
        <div className='credentials'>

        </div>
    </div>
  )
}

export default Credentials