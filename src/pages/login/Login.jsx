import React, { useState } from 'react'
import signupImg from "../../assets/signupImg.png"
import Laserpay_logo from "../../assets/Laserpay_logo.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.scss"
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess } from '../../redux/userSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "password") {
      setPassword(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password
    }
    console.log(obj)
    try {
      const res = await axios.post("https://api1-7f7y.onrender.com/auth/signin", obj)
      console.log(res);

      if (res.status === 200) {
        dispatch(loginSuccess(obj));
        navigate('/')
      }
      else {
        throw new Error('something went wrong');
      }
    }
    catch (err) {
      console.log(err);
    }

  }
  return (
    <div className='login'>
      <div className='img-container'>
        <img src={signupImg} alt="" />
      </div>

      <div className='login-container'>
        <div className='login-box'>
          <div className='login-info'>
            <div className='logo-box'>
              <img src={Laserpay_logo} height="30px" width="30px" alt="" />
              <h1>Laserpay <sup>TM</sup></h1>
            </div>

            <div className='info-box'>
              <p>Enter Your Email</p>
              <input type="email" placeholder='  eg: johndoe@gmail.com' id='email' onChange={handleChange} /> <br /> <br />
              <p>Enter Your Password</p>
              <input type="password" placeholder='  password' id="password" onChange={handleChange} /> <br />
              <p className='p-info'>By creating an account, I agree to Hyperstack's Privacy Policy and Terms and Conditions</p>
            </div>
            <div className='button-box'>
              <button onClick={handleClick}>Login</button>
              <div style={{ display: "flex",justifyContent:"center",alignItems:"center",gap:"5px" }}>
                <span>New to Laserpay ? </span> 
                <span className='create'><Link to="/signup">create your account</Link> </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;