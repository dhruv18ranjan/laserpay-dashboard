import React from 'react'
import "./settings.scss"
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { settings } from '../../MenuData'

const Settings = () => {
  return (
    <div className='settingsDiv'>

        <Navbar />
        <Menu data={settings} />
        <div className='settings'>

        </div>
    </div>
  )
}

export default Settings