import React from 'react';
import { useState } from 'react';
import axios from "axios"
import './login.css';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(phone, password)

    let response = await axios.post("http://localhost:3001/login", {
      phone: phone,
      password: password
    });

    let { data } = response ;

    if (data.error) {
      alert(data.msg)
    } else {

      console.log(response);
      dispatch(doLogin(data));

      navigate("/postpg")
    }
  }

  return (
    <div className='form-container'>
      <h1>Login </h1>
      <form>

        <label for='phone'>phone </label>
        <input type='number' id='phone' name='phone' onChange={e => setPhone(e.target.value)} placeholder='enter mobile number' />

        <label for='password'> user name</label>
        <input type='text' id='password' name='password' onChange={e => setPassword(e.target.value)} placeholder='enter password' />
        <button type="submit" onClick={submitHandler}>login</button>

      </form>

      <div >
        <h3>Need an account <a href="/signup">click here</a> </h3>

      </div>

    </div>
  )
}
