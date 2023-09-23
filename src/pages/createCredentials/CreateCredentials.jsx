import React from 'react'
import "./createCredentials.scss"
import logo from "../../assets/Laserpay_logo.png"
import { useNavigate, useParams } from 'react-router-dom'
import {  faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { setEvents } from '../../redux/eventSlice'
import { useDispatch, useSelector } from 'react-redux'


const CreateCredentials = () => {
    const navigate=useNavigate();
    const handleLogo=()=>{
        navigate("/");
    } 

    const dispatch=useDispatch();
    const {id}=useParams();

   useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await fetch(`https://api1-7f7y.onrender.com/organizations/${id}/events`,{
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
        dispatch(setEvents(data));
      });
   },[])

   const data=useSelector((state)=>state.events.events);
 
    return (
        <div className='createContainer'>

            <div className='leftContainer'>
                <div style={{cursor:"pointer", marginBottom:"30px"}}>
                    <FontAwesomeIcon icon={faArrowLeftLong} onClick={handleLogo} style={{color:"gray"}} />
                </div>
                <div className='logoDiv' style={{ cursor: "pointer" }} onClick={handleLogo}>
                    <img src={logo} alt="" />
                    <span>laserpay</span>
                </div>
            </div>

            <div className='inputdiv'>
                <div className='dropdown'>
                    <select name="event" id="">
                        {
                            data.map((event,index)=>(
                                <option key={index} value="event1">{event?.name}</option>
                            ))
                        }
                       
                    </select>
                </div>

                <div className='dataUpload'>
                    <span>
                        Data
                    </span>
                    <div className='exceldiv'>

                        <input type="file" id='DesignFile' accept='.xls .xlsx' />
                        <label htmlFor="DesignFile">upload from excel</label>
                    </div>
                </div>

                <div className='dataShow'>

                    <table width="90%" cellSpacing="0px" style={{ margin: "10px", marginLeft: "30px", marginTop: "50px" }}  >
                        <tr>
                            <th>name</th>
                            <th style={{ width: "70%" ,maxWidth:"70%"}}>email</th>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td contentEditable suppressContentEditableWarning={true}></td>
                            <td contentEditable suppressContentEditableWarning={true}><i class="fa fa-comment" aria-hidden="true"></i></td>
                        </tr>

                     
                       
                    </table>

                </div>

                <div className='buttonDiv'>
                    <button>Issue Credentials</button>
                </div>

            </div>

            <div className='templateDiv'>
                <div className='certificateTemplate'>
                    <h2>Certificate Template</h2>
                </div>

                <hr />

                <div className='emailTemplate'>
                    <h2>Certificate Template</h2>
                </div>

            </div>

        </div>
    )
}

export default CreateCredentials