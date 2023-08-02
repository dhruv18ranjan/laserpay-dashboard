import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import "./integration.scss"

const Integration = () => {

  const data=[
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_webex.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_zoom.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_hubspot.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_teachable.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_kajabi.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_moodle.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_thinkific.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_udemy-for-business.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_microsoft-dynamics-crm.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_google-sheets.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_wordpress.png",
    },
    {
      brand:"Cisco Webex",
      brandwork:"Video Conferencing",
      brandpara:"Cisco Webex Meetings is the leading enterprise solution for video conferencing, online meetings, screen share, and webinars.",
      brandimg:"https://distributed.s3.amazonaws.com/static/assets/logos/logo_sq_google-forms.png",
    },
    
  ]

  return (
    <div className='integrationContainer'>
      <Navbar />
      <Menu />

      <div className='infoGrids'>

        <div className='infoContainer'>
          <p className='integrationHead'>Application Integration</p>
          <p className='integrationp'>
            Integrate with your existing software to automate your credential workflow; <br />
            create and send credentials automatically.
          </p>

          <div className='integrationList'>

            {data.map((dataItem,index)=>(

            
              <div className='integration'  key={index}>
              <div className='integrationHeading'>

                <div>
                  <img src={dataItem.brandimg} width="55" style={{ "maxHeight": "55px", "display": "flex" }} />
                </div>

                <div>
                  <p className='brand'>{dataItem.brand}</p>
                  <p className='brandwork'>{dataItem.brandwork}</p>
                </div>

              </div>
              <p className="brandpara">{dataItem.brandpara}</p>
            </div>))}



          </div>


        </div>

      </div>

    </div>
  )
}

export default Integration