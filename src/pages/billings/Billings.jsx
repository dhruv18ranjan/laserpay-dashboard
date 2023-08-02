import React from 'react'
import "./billings.scss"
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { billings } from '../../MenuData'

const Billings = () => {
  return (
    <div className='billingsDiv'>
        <Navbar />
        <Menu data={billings}/>
        <div className='billings'>

        </div>
    </div>
  )
}

export default Billings