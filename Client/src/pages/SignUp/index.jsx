import React, {useState} from 'react'
import Boy from "../../assets/boy.png"
import Light from "../../assets/light.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { FaApple } from "react-icons/fa";
import axios from 'axios'
import {apiUrl} from '../../utils'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const userData = {
        name:name,
        email:email,
        password:password
    }

    const handleSubmit =()=>{
        axios.post(`${apiUrl}signup`, userData)
          .then(function (response) {
            navigate('/login')
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div>
            <div>
        <div className='login'>
            <div className='login_grid'>
                <div>
                    <div className='bg'>
                    <img src={Light} alt="" className='light'/>
                    <img src={Boy} alt="" className='boy'/>
                    </div>
                </div>
                <div className='input3'>
                    <h1>Sign Up</h1>
                    <div>
                    <label htmlFor="Email"></label>
                    <div className='input1'><input type="text" placeholder='Enter Your Email' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    /></div>
                    <div className='input1'><input type="text" placeholder='Enter Your Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    /></div>
                    <div className='input2'><input type="password" placeholder='Enter Your Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    /></div>
                    <small><a href="">Forgot Password?</a></small>
                    <div><button disabled={!name && !email && !password} onClick={handleSubmit}>
                    {loading ? 'Sign in....' : 'Sign up' }
                    </button></div>
                    <p>Already have an account?<a href="/login"> Sign in</a></p>
                    <div className='icons'>
                    <a href="https://www.google.co.uk/"><FcGoogle /></a>
                    <IconContext.Provider value={{ className:"facebook "}}>
                    <a href="https://www.facebook.com/" target='/'><FaFacebookSquare/></a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className:"apple "}}>
                    <a href="https://www.apple.com/"><FaApple /></a>
                    </IconContext.Provider>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp