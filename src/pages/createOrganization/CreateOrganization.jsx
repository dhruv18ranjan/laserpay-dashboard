import logo from "../../assets/Laserpay_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightLong, faCircleInfo, faGlobe, faI, faInfo, faPlus, faRightLong } from '@fortawesome/free-solid-svg-icons'
import "./createOrganization.scss"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreateOrganization = () => {
const[name,setName]=useState(null);
const [email,setEmail]=useState(null);
const navigate=useNavigate();
const handleChange=(e)=>{
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }

}
const handleClick=async(e)=>{
    e.preventDefault();
    let obj = {
      name:name,
      email: email,
    }
    console.log(obj)

    try {
        const res = await axios.post("https://api1-7f7y.onrender.com/organizations", obj,{
            headers:{
                'uid':'BuptUBihoNNaKa3D77ZYWK96JN83'
              }
        })
        console.log(res);
        
        if(res.status===201){
          navigate('/')
        }
        else{
          throw new Error('something went wrong');
        }
      }
      catch (err) {
        console.log(err);
      }
  

}

  return (
    <div className='create'>
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

            <div className="input-container">
                <label htmlFor="organization">Enter Organization Name</label> <br />
                <input id="name"  onChange={handleChange} type="text" />
            </div>  
            <div className="input-container">
                <label htmlFor="organization">Enter email</label> <br />
                <input id="email"  onChange={handleChange} type="email" />
            </div>  

            <button className="button" onClick={handleClick}>Create Organization</button>
                      

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

export default CreateOrganization;