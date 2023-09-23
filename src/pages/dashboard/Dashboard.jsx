import React, { useRef, useState } from 'react'
import "./dashboard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBarsProgress, faGear, faFile, faRandom, faArrowRightToBracket, faUpload, faMailBulk, faMailForward, faMailReply, faMessage, faEnvelope, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { dashboard } from '../../MenuData'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'

const Dashboard = () => {
    const [file,setFile]=useState(null);
    const handleFileChange=(e)=>{
        setFile(e.target.value);
        console.log(file);
    }

    const emailRef=useRef(null);
    const handleEmailButtonClick = () => {
        window.location.href = 'mailto:dhruv18ranjan@gmail.com';
      };

    const {id}=useParams();

    return (
        <div className='dashboard'>
            <Sidebar id={id} />

            <div className='container'>
                <Navbar />
                <Menu data={dashboard} arrayName="dashboard" id={id}/>

                <div className='infoGrid'>
                    <div className='infoContainer'>

                        <table cellPadding="32" >
                            <tbody>

                                <tr>
                                    <td>
                                    <Link to={`/${id}/dashboard/create-credentials`}>
                                            <div className='tdDiv'>
                                                <img src="https://distributed.s3.amazonaws.com/static/assets/flat_add.png" alt="" />
                                                <p>Create/Issue <br /> New Credentials</p>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/${id}/dashboard/create-events`}>

                                            <div className='tdDiv'>
                                                <img src="https://distributed.s3.amazonaws.com/static/assets/flat_stack.png" alt="" />
                                                <p>Create <br /> Events</p>

                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <div className='tdDiv'>
                                            <img src="https://distributed.s3.amazonaws.com/static/assets/flat_certificate.png" alt="" />
                                            <input type="file" onChange={handleFileChange} id='customInput' />
                                            <label htmlFor='customInput'>Create <br /> Design</label>
                                        </div>
                                    </td>
                                    <td><div className='tdDiv' ref={emailRef} onClick={handleEmailButtonClick}>
                                        <img src="https://distributed.s3.amazonaws.com/static/assets/flat_badge.png" alt="" />
                                        <p>Support <br /> Centre</p></div>
                                    </td>
                                </tr>
                                {/* <tr>
                                <td>
                                <div className='tdDiv'>
                                <img src="https://distributed.s3.amazonaws.com/static/assets/flat_color.png" alt="" />
                                <p>Whitelabeling <br /> and Brand Identity</p></div>
                                </td>
                                <td>
                                <div className='tdDiv'>
                                <img src="https://distributed.s3.amazonaws.com/static/assets/flat_puzzle.png" alt="" />
                                <p> API Access <br /> & Documention  </p>
                                </div>   
                                </td>
                                <td>
                                <div className='tdDiv'>
                                    <img src="https://distributed.s3.amazonaws.com/static/assets/flat_book.png" alt="" />
                                    <p>Platform <br /> Tutorial</p></div>
                                </td>
                                <td>
                                <div className='tdDiv'>
                                <img src="https://distributed.s3.amazonaws.com/static/assets/flat_support.png" alt="" />
                                <p>Contact <br /> Support Center</p></div>
                                </td> 
                            </tr>*/}
                            </tbody>

                        </table>
                    </div>
                </div>

                <div className='started'>
                    <table>
                        <tbody>
                            <tr>
                                <td><h3>Getting Started</h3></td>
                                <td align='center'>Mark Finished &nbsp; &nbsp;</td>
                            </tr>
                            <tr>
                                <td>Step 1: Create your first group</td>
                                <td align='center'>Create  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#1575E5", width: "30px" }} />&nbsp;&nbsp;&nbsp; </td>
                            </tr>
                            <tr>
                                <td>Step 2: Design a certificate for your group</td>
                                <td align='center' >Finished &nbsp;  <FontAwesomeIcon icon={faCheck} /> &nbsp; &nbsp;</td>
                            </tr>
                            <tr>
                                <td>Step 3: Start Publishing your Certificates</td>
                                <td align='center'>Start &nbsp;   <FontAwesomeIcon icon={faArrowRight} style={{ color: "#1575E5", width: "30px" }} />&nbsp; &nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard