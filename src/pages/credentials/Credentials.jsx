import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import "./credentials.scss"
import { credentials } from '../../MenuData'
import Sidebar from '../../components/sidebar/Sidebar'

const Credentials = () => {
  return (
    <div className='credentialsMain'>
      <Sidebar />
    <div className='credentialsDiv'>
        <Navbar />
        <Menu data={credentials} arrayName="credentials" />
        <div className='credentials'>

        </div>
    </div>
    </div>
  )
}

export default Credentials