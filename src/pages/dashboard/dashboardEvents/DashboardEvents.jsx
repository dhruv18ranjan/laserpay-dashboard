import React from 'react'
import "./dashboardEvents.scss"
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Menu from '../../../components/menu/Menu';
import { dashboard } from '../../../MenuData';

const DashboardEvents = () => {
    return (
        <div className='dashboardEventsMain'>
            <Sidebar />
            <div className='dashboardEvents'>

                <Navbar />
                <Menu data={dashboard} arrayName="dashboard" />
                <div className='dashboardEventsGrid'>
                    <div className='dashboardEventsContainer'>
                        <div className='eventsDiv'>
                            <h5>Design</h5>
                        </div>
                        <div className='eventsDiv'>
                            <h5>Design</h5>
                        </div>
                        <div className='eventsDiv'>
                            <h5>Design</h5>
                        </div>
                        <div className='eventsDiv'>
                            <p>+</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashboardEvents;