import React from 'react'
import "./insights.scss"
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { insights } from '../../MenuData'
import Sidebar from '../../components/sidebar/Sidebar'
import { CChart } from '@coreui/react-chartjs'

const Insights = () => {
  return (
    <div className='insightsMain'>
      <Sidebar />
      <div className='insightsDiv'>
        <Navbar />
        <Menu data={insights} arrayName="insights" />
        <div className='visitorsData'>
          <div className='totalVisitors'>
            <span>Total Visitors</span>
            <div className='chartDiv'>

              <CChart
                type="line"
                data={{
                  labels: ["January", "February", "March", "April", "May", "June", "July"],
                  datasets: [
                    {
                      label: "Issuances",
                      backgroundColor: "rgba(220, 220, 220, 0.2)",
                      borderColor: "rgba(220, 220, 220, 1)",
                      pointBackgroundColor: "rgba(220, 220, 220, 1)",
                      pointBorderColor: "#fff",
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                    },
                    {
                      label: "Visitors",
                      backgroundColor: "rgba(151, 187, 205, 0.2)",
                      borderColor: "rgba(151, 187, 205, 1)",
                      pointBackgroundColor: "rgba(151, 187, 205, 1)",
                      pointBorderColor: "#fff",
                      data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                    },
                  ],
                }}
            
              />

            </div>
          </div>
          <div className='trafficSources'>
            <span>Traffic Sources</span>
            <div>

            </div>
          </div>
        </div>

        <div className='trafficData'>

          <div className='socialTraffic'>
            <span>Linkedin Traffic</span>
            <div className='dataDiv'>
              <div>
                <p>0</p>
                <span>Lifetime</span>
              </div>
              <div>
                <p>0</p>
                <span>This Month</span>
              </div>
            </div>
          </div>

          <div className='socialTraffic'>
            <span>Facebook Traffic</span>
            <div className='dataDiv'>
              <div>
                <p>0</p>
                <span>Lifetime</span>
              </div>
              <div>
                <p>0</p>
                <span>This Month</span>
              </div>
            </div>
          </div>

          <div className='socialTraffic'>
            <span>Twitter Traffic</span>
            <div className='dataDiv'>
              <div>
                <p>0</p>
                <span>Lifetime</span>
              </div>
              <div>
                <p>0</p>
                <span>This Month</span>
              </div>
            </div>
          </div>

          <div className='socialTraffic'>
            <span>Whatsapp Traffic</span>
            <div className='dataDiv'>
              <div>
                <p>0</p>
                <span>Lifetime</span>
              </div>
              <div>
                <p>0</p>
                <span>This Month</span>
              </div>
            </div>
          </div>
        </div>


        <div className='engagementData'>
          <div className='engagementDiv'>
            <span>0</span>
            <span>Total <br /> Impression</span>
          </div>
          <div className='engagementDiv'>
            <span>0</span>
            <span>Social Media <br /> Traffic</span>
          </div>
          <div className='engagementDiv'>
            <span>0</span>
            <span>Credentials <br /> Issued last month</span>
          </div>
          <div className='engagementDiv'>
            <span>0</span>
            <span>Total Credentials <br /> Issued</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Insights