import React, { useState } from 'react'
import "./settings.scss"
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import { settings } from '../../MenuData'
import Sidebar from '../../components/sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

const Settings = () => {
   const [accountDiv, setAccountDiv] = useState(false);
   const [descriptionDiv, setDescriptionDiv] = useState(false);
   const [emailDiv, setEmailDiv] = useState(false);
   const [profilePicDiv, setProfilePicDiv] = useState(false);

   const handleAccountName = () => {
      setAccountDiv(!accountDiv);
   }
   const handleDescription = () => {
      setDescriptionDiv(!descriptionDiv);
   }
   const handleEmail = () => {
      setEmailDiv(!emailDiv);
   }
   const handleProfilePic = () => {
      setProfilePicDiv(!profilePicDiv);
   }

   return (
      <div className='settingsMain'>
         <Sidebar />
         <div className='settingsDiv'>

            <Navbar />
            <Menu data={settings} arrayName="settings" />

            <div className='settings'>

               <div className='settingsType' >
                  <div className={`settingsTypeAction ${accountDiv ? 'settingsTypeActionActive' : ''}`} onClick={handleAccountName}>
                     <span>Account name</span>
                     {!accountDiv && <button>EDIT</button>}
                  </div>


                  <div className={`transition-content ${accountDiv ? 'active' : ''}`}>
                     <p style={{ fontSize: "10px", color: "gray" }}>Contact Support to change or update your Profile Name.
                        Updating your account <br /> name requires additional verification
                        documents issued by the government.</p>
                  </div>


               </div>


               <div className='settingsType' >
                  <div className={`settingsTypeAction ${descriptionDiv ? 'settingsTypeActionActive' : ''}`} onClick={handleDescription}>
                     <span>Description</span>
                     {!descriptionDiv && <button>EDIT</button>}
                  </div>

                  <div className={`settingsInput ${descriptionDiv ? 'active' : ' '}`}>
                     <textarea placeholder='Tell us something about yourself...' />
                     <button>save changes</button>
                  </div>

               </div>

               <div className='settingsType' >
                  <div className={`settingsTypeAction ${emailDiv ? 'settingsTypeActionActive' : ''}`} onClick={handleEmail}>
                     <span>Email Address</span>
                     {!emailDiv && <button>EDIT</button>}
                  </div>

                  <div className={`settingsInput ${emailDiv ? 'active' : ' '}`}>
                     <input placeholder='     Account Email Address' type="email" />
                     <button>save changes</button>
                  </div>

               </div>

               <div className='settingsType'  >
                  <div className={`settingsTypeAction ${profilePicDiv ? 'settingsTypeActionActive' : ''}`} onClick={handleProfilePic}>
                     <span>Profile Picture</span>
                     {!profilePicDiv && <button>EDIT</button>}
                  </div>

                  <div className={`settingsInput ${profilePicDiv ? 'active' : ' '}`}>
                     <div>
                        <input className='input' type="file" id='profile' style={{ display: "none" }} />
                        <label htmlFor="profile"> <FontAwesomeIcon icon={faImage}
                           style={{ height: "40px", width: "40px", color: "gray", marginTop: "0px" }} /> </label>
                     </div>
                     <div style={{ marginLeft: "30px" }}>
                        <p style={{ margin: 0, fontSize: "13px" }}>choose a profile pic</p>
                        <p style={{ marginTop: "5px", color: "gray" }}>the image should be at least 200px wide by 200px tall</p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Settings