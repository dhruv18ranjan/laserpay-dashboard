import React, { useState } from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPuzzlePiece, faCircleDollarToSlot, faChartLine, faFolder, faServer, faArrowDown, faArrowDown19, faArrowsUpDown, faArrowTurnDown, faCaretDown, faHouse, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  }
  

  return (
    <div className="sidebar">

      <div className='heading'>
        <div className='headingDiv'>
          <h3>Dhruv</h3>
          <p>@dhruv18ranjan</p>
        </div>
        <div className='dropdown'>
          <FontAwesomeIcon icon={faCaretDown} onClick={handleDropdown} />

          {dropdown && (
            <div>
              <ul className="dropdown-menu">
                <li> <FontAwesomeIcon style={{color:"gray "}} icon={faHouse} /> &nbsp; &nbsp; Home</li>
                <li> <FontAwesomeIcon style={{color:"gray"}} icon={faPlus} /> &nbsp; &nbsp; create organisation</li>
                <li> <FontAwesomeIcon style={{color:"gray"}} icon={faRightFromBracket} /> &nbsp; &nbsp; logout</li>
              </ul>
            </div>
          )

          }

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
            <Link to="/credentials"> <FontAwesomeIcon icon={faFolder} className='icon' /> &nbsp; &nbsp; All Credentials</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/insights"> <FontAwesomeIcon icon={faChartLine} className='icon' /> &nbsp; &nbsp;Analytics & Insights</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/integrations"> <FontAwesomeIcon icon={faPuzzlePiece} className='icon' /> &nbsp; &nbsp; Integrations</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/billings"><FontAwesomeIcon icon={faCircleDollarToSlot} className='icon' /> &nbsp; &nbsp;Billing & Usage</Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/settings"><FontAwesomeIcon icon={faGear} className='icon' /> &nbsp; &nbsp;Settings</Link>
          </p>
        </div>

      </div>
      <br />


    </div>
  )
}

export default Sidebar