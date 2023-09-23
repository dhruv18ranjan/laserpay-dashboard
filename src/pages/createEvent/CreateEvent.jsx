import React, { useState } from 'react'
import "./createEvent.scss"
import logo from "../../assets/Laserpay_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CreateEvent = () => {
    const [design, setDesign] = useState("");
    const [name, setName] = useState("");
    const [context, setContext] = useState("");
    const [website, setWebsite] = useState("");



    const navigate = useNavigate();
    const handleLogo = () => {
        navigate("/");
    }

    const handleChange=(e)=>{
        const{id,value}=e.target;

        if(id==="name"){
            setName(value);
        }
        if(id==="DesignFile"){
            setDesign(value);
        }
        if(id==="context"){
            setContext(value);
        }
        if(id==="website"){
            setWebsite(value);
        }

    }

    const {id}=useParams();
    console.log(id);

    const handleClick=async(e)=>{
        e.preventDefault();
        let obj={
            name:name,
            design:design,
            context:context,
            website:website
        }
        console.log(obj);

        try {
            const res = await axios.post(`https://api1-7f7y.onrender.com/organizations/${id}/events`, obj,{
                headers:{
                  'uid':'BuptUBihoNNaKa3D77ZYWK96JN83'
                }
            })
            console.log(res);
            
            if(res.status===201){
                navigate(`/${id}/dashboard/create-events`)
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
        <div className='createEventContainer'>

            <div className='leftContainer'>
                <div style={{ cursor: "pointer", marginBottom: "30px" }}>
                    <FontAwesomeIcon icon={faArrowLeftLong} onClick={handleLogo} style={{ color: "gray" }} />
                </div>
                <div className='logoDiv' style={{ cursor: "pointer" }} onClick={handleLogo}>
                    <img src={logo} alt="" />
                    <span>laserpay</span>
                </div>
            </div>


            <div className='inputDiv'>

                <div className='inputWrapper'>



                    <div className='inputHeading'>
                        <h3>Event</h3>
                    </div>

                    <div className='inputContainer'>

                        <label htmlFor="name"> <p>Name</p> </label>
                        <input type="text" id='name'  onChange={handleChange} placeholder='write the name of the event  ' />

                        <p>Design</p>
                        <div className='designDiv'>
                            <input type="file" onChange={handleChange} id='DesignFile' />
                            <label htmlFor="DesignFile"> <FontAwesomeIcon icon={faFileUpload} /> </label>
                        </div>

                        <label htmlFor="context"> <p>Context</p> </label>
                        <textarea id='context'  onChange={handleChange} placeholder='write the short description of the event ' />

                        <label htmlFor="website"> <p>Website</p> </label>
                        <input type="text" id='website'  onChange={handleChange} placeholder='enter event link' />

                    </div>

                    <button onClick={handleClick}>Add Event</button>

                </div>
            </div>

            <div className='emailAppearance'>
                <div className='emailWrapper'>

                    <h3>Email Appearance</h3>
                </div>
            </div>

        </div>
    )
}

export default CreateEvent