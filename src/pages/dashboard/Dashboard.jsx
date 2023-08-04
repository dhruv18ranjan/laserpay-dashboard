import React, { useState } from 'react'
import "./dashboard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBarsProgress, faGear, faFile, faRandom, faArrowRightToBracket, faUpload, faMailBulk, faMailForward, faMailReply, faMessage, faEnvelope, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { dashboard } from '../../MenuData'

const Dashboard = () => {

    return (
        <div className='container'>
            <Navbar />
            <Menu data={dashboard} />

            <div className='infoGrid'>
                <div className='infoContainer'>

                    <table cellPadding="32" >
                        <tbody>

                            <tr>
                                <td>
                                    <div className='tdDiv'>
                                    <img src="https://distributed.s3.amazonaws.com/static/assets/flat_add.png" alt="" />
                                    <p>Create/Issue <br /> New Credentials</p>
                                    </div>
                                </td>
                                <td>
                                    <div className='tdDiv'>
                                    <img src="https://distributed.s3.amazonaws.com/static/assets/flat_stack.png" alt="" />
                                    <p>Create <br /> Credential Group</p>

                                    </div>
                                </td>
                                <td>
                                <div className='tdDiv'>
                                    <img src="https://distributed.s3.amazonaws.com/static/assets/flat_certificate.png" alt="" />
                                    <p>Design <br /> Certificate Template</p>
                                    </div>
                                </td>
                                <td><div className='tdDiv'>
                                    <img src="https://distributed.s3.amazonaws.com/static/assets/flat_badge.png" alt="" />
                                    <p>Design New <br /> Badge</p></div>
                                </td>
                            </tr>
                            <tr>
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
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>

            <div className='started'>
                <table>
                    <tbody>
                        <tr>
                            <td><h3>Getting Started</h3></td>
                            <td>Mark Finished</td>
                        </tr>
                        <tr>
                            <td>Step 1: Create your first group</td>
                            <td>Create <FontAwesomeIcon icon={faArrowRight} style={{color:"#1575E5",width:"40px"}} /> </td>
                        </tr>
                        <tr>
                            <td>Step 2: Design a certificate for your group</td>
                            <td>Finished <FontAwesomeIcon icon={faCheck} /> </td>
                        </tr>
                        <tr>
                            <td>Step 3: Start Publishing your Certificates</td>
                            <td>Start <FontAwesomeIcon icon={faArrowRight} style={{color:"#1575E5",width:"40px"}} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard