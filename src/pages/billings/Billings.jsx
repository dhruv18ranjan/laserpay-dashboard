import React from 'react'
import "./billings.scss"
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { billings } from '../../MenuData'
import Sidebar from '../../components/sidebar/Sidebar'

const Billings = () => {
  return (
    <div className='billings'>
      <Sidebar />
      <div className='billingsDiv'>
        <Navbar />
        <Menu data={billings} arrayName="billings" />
        <div className='billingsContainer'>

        </div>
      </div>
    </div>
  )
}

export default Billings