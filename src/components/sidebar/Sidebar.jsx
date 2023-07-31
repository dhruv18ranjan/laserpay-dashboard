import React from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
import logo from  "../../assets/Laserpay_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBarsProgress,faGear, faFile, faRandom, faArrowRightToBracket, faDashboard, faPuzzlePiece, faMoneyBill, faMoneyBill1, faMoneyBill1Wave, faDollar, faDollarSign, faCircleDollarToSlot, faBarChart, faChartBar, faChartLine, faFolder, faFolderBlank, faFolderOpen, faFolderTree, faFolderMinus, faDatabase, faBridge, faBook, faServer } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className='heading'>
        <div className='headingDiv'>
        <h3>Dhruv</h3>
        <p>@dhruv18ranjan</p>
        </div>
      </div>
      <div className='heading'>
        <div className='headingDiv'>
        <h3>Laserpay</h3>
        <p>store credentials</p>
        </div>
      </div>
      

      <div className='sidebarItems'>          
           
        <div className='menuItemDiv'>
          <p>
          <Link to="/dashboard">
             <FontAwesomeIcon icon={faServer} className='icon' /> &nbsp; &nbsp; Dashboard</Link>
          </p>
        </div>
      

        <div className='menuItemDiv'>

          <p>
            <Link to="/management"> <FontAwesomeIcon icon={faFolder} className='icon' /> &nbsp; &nbsp; All Credentials</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/settings"> <FontAwesomeIcon icon={faChartLine} className='icon'/> &nbsp; &nbsp;Analytics & Insights</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/random"> <FontAwesomeIcon icon={faPuzzlePiece} className='icon'/> &nbsp; &nbsp; Integrations</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/random"><FontAwesomeIcon icon={faCircleDollarToSlot}className='icon' /> &nbsp; &nbsp;Billing & Usage</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/random"><FontAwesomeIcon icon={faGear} className='icon'/> &nbsp; &nbsp;Settings</Link>
          </p>
        </div>

      </div>
      <br />

     
    </div>
  )
}

export default Sidebar