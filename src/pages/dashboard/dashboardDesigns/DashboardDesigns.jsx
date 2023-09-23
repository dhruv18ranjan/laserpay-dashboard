import React from 'react'
import "./dashboardDesigns.scss"
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import { dashboard } from '../../../MenuData';
import Menu from '../../../components/menu/Menu';

const DashboardDesigns = () => {
    return (
        <div className='dashboardDesignsMain'>
            <Sidebar />
            <div className='dashboardDesigns'>

                <Navbar />
                <Menu data={dashboard} arrayName="dashboard" />
                <div className='dashboardDesignsGrid'>
                    <div className='dashboardDesignsContainer'>
                        <div className='DesignDiv'>
                            <div className='designContainer'>
                                <h5>DESIGN</h5> 
                            </div>
                            <div className='editDiv'>
                                <span>EDIT</span> <span>INFO</span>
                            </div>
                        </div>
                        <div className='DesignDiv'>
                            <div className='designContainer'> 
                                <h5>DESIGN</h5> 
                            </div>
                            <div className='editDiv'>
                                <span>EDIT</span> <span>INFO</span>
                            </div>
                        </div>
                        <div className='DesignDiv'>
                            <div className='designContainer'>
                                <h5>DESIGN</h5> 
                            </div>
                            <div className='editDiv'>
                                <span>EDIT</span> <span>INFO</span>
                            </div>
                        </div>
                        <div className='DesignDiv'>
                            <p>+</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashboardDesigns;