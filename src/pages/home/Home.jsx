import React, { useEffect } from 'react'
import "./home.scss"
import logo from "../../assets/Laserpay_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightLong, faCircleInfo, faGlobe, faI, faInfo, faPlus, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setOrganizations } from '../../redux/organizationSlice'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api1-7f7y.onrender.com/organizations',{
            headers:{
              'uid':'BuptUBihoNNaKa3D77ZYWK96JN83'
            }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return []; 
      }
    };
  
    fetchData().then((data) => {
      dispatch(setOrganizations(data));
    });
  }, []);
  const data=useSelector((state)=>state.organizations.organizations);
  console.log(data);

  return (
    <div className='home'>
      <div className='container'>

        {/* ----------------------first section----------------------------- */}

        <div className='first-section'>

          <div className='header-div'>
            <div>
              <img src={logo} height="50px" width="50px" alt="" />
            </div>

            <div className='intro-div'>
              <span>Welcome ,</span> <br />
              <span>Dhruv Ranjan</span>
            </div>
          </div>

          <div className='buttons-div'>
            <button><span>Access Wallet &nbsp; &nbsp; <FontAwesomeIcon icon={faArrowRightLong} /></span> </button>
            <button><span>Log out </span></button>
          </div>
        </div>
        {/* --------------second section---------------------- */}
        <div className='second-section'>
          <div className='organization-container'>
            <div className='org-head'>
              <h3>My issuer organizations &nbsp; <FontAwesomeIcon icon={faCircleInfo} /> </h3>
            </div>

            <div className='all-orgs'>

              {data.map((item,index)=>(
                <div className='org' key={index} onClick={()=>{navigate(`/${item.organizationId}/dashboard`)}} >
                <div className='globe'>
                  <FontAwesomeIcon icon={faGlobe} className='globe-icon' />
                </div>
                <div className='org-name' >
                  <span>{item.name}</span>
                </div>
              </div>
              ))}
              

              <div className='org' onClick={()=>navigate('/create-org')}>
                <div className='globe'>
                  <FontAwesomeIcon icon={faPlus} style={{color:"#1575E5", width:"60px" , height:"60px"}}  className='globe-icon' />
                </div>
             
              </div>

            </div>

            <div className='basic-footer'>
              <span>Powered By Hyperstack's Decentralization Trust Engine Layer</span> <br />
              <span>Privacy Policy</span> . <span>Terms</span> . <span>Responsible Disclosure</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home