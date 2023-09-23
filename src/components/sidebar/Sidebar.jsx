import React, { useEffect, useState } from 'react'
import "./sidebar.scss"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPuzzlePiece, faCircleDollarToSlot, faChartLine, faFolder, faServer, faArrowDown, faArrowDown19, faArrowsUpDown, faArrowTurnDown, faCaretDown, faHouse, faPlus, faRightFromBracket, faEarth } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { emptyOrganisations, setOrganizations } from '../../redux/organizationSlice'
import { logout } from '../../redux/userSlice'



const Sidebar = ({id}) => {

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  }
  const navigate=useNavigate();

  

  // const dispatch=useDispatch();

  // const fetchData = async() => {
  //   const response = await fetch('https://api1-7f7y.onrender.com/organizations');
  //   const data = await response.json();
  //   return data;
  // }
  
  // useEffect(()=>{
  //   fetchData().then((data)=>{
  //     dispatch(setOrganizations(data));
  //   })
    
  // },[])
 
  const organisationData=useSelector((state)=>state.organizations.organizations);
  const userData=useSelector((state)=>state.user.currentUser);
  const dispatch=useDispatch();
  
  const handleLogout=()=>{
      dispatch(logout);
      dispatch(emptyOrganisations);
      navigate('/login')
  }

  return (
    <div className="sidebar">

      <div className='heading'>
        <div className='headingDiv'>
          <h3>Dhruv</h3>
          <p>{userData?.email}</p>
        </div>
        <div className='dropdown'>
          <FontAwesomeIcon icon={faCaretDown} onClick={handleDropdown} />

          {dropdown && (
            <div>
              <ul className="dropdown-menu">
                <li onClick={()=>navigate("/")}> <FontAwesomeIcon style={{color:"gray "}} icon={faHouse} /> &nbsp; &nbsp; Home</li>
                {organisationData.map((orgs,index)=>(
                   <li key={index}> <FontAwesomeIcon icon={faEarth} style={{color:"gray"}} />&nbsp; &nbsp; &nbsp; {orgs.name} </li>  
                ))}
                <li> <FontAwesomeIcon style={{color:"gray"}} icon={faPlus} /> &nbsp; &nbsp; create organisation</li>
                <li onClick={handleLogout}> <FontAwesomeIcon style={{color:"gray"}} icon={faRightFromBracket} /> &nbsp; &nbsp; logout</li>
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
            <Link to={`/${id}/dashboard`}>
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
            <Link to="/insights"> <FontAwesomeIcon icon={faChartLine} className='icon' /> &nbsp; &nbsp;Analytics <sup>BETA</sup> </Link>
          </p>
        </div>

        <div className='menuItemDiv'>

          <p>
            <Link to="/integrations"> <FontAwesomeIcon icon={faPuzzlePiece} className='icon' /> &nbsp; &nbsp; Integrations <sup>BETA</sup></Link>
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