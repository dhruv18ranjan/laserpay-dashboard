import React from 'react'
import "./insights.scss"
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { insights } from '../../MenuData'

const Insights = () => {
  return (
    <div className='insightsDiv'>
      <Navbar />
      <Menu data={insights} />
        <div className='insights'>

        </div>
    </div>
  )
}

export default Insights