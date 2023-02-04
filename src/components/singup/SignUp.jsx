import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './signup.css';

export default function SignUp() {

  const [signinData, setSignInData] = useState({
    name: "",
    phone: 0,
    email: "",
    password: "",
  })

  const changeHandler = e => {
    setSignInData({...signinData, [e.target.name] : e.target.value})
  }

  const submitHandler = async (e)=>{
    e.preventDefault()
    const sendDataToBE = await axios.post("http://localhost:3001/signup", {
      name: signinData.name,
      phone: signinData.phone,
      email: signinData.email,
      password: signinData.password
    })
    
console.log(sendDataToBE)

    return alert("user created")
  }
 


  return (
    <div className='signup-container'>
      <h1>Sign Up</h1>

      <form className='forminp'>

        <label for= 'name'> user name</label>
        <input type='text' id='name' name='name'  onChange={changeHandler} placeholder='user name' />

        <label for= 'phone'>phone </label>
        <input type='number' id='phone' name='phone' onChange={changeHandler} placeholder='enter mobile number' />

        <label for= 'email'>email </label>
        <input type='email' id='email' name='email' onChange={changeHandler} placeholder='enter mobile number' />

        <label for= 'password'> password</label>
        <input type='text' id='password' name='password' onChange={changeHandler} placeholder='enter password' />

       
      </form>

      <div className="termsCondition">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label for="checkbox"> I agree to these <a href='#'>Terms & Conditions</a></label>
      </div>

      <button onClick={submitHandler}>sign up</button>

      <div className="member">already have a member 
      <a href='/login'>Login here</a>
      </div>
    </div>
  )
}
