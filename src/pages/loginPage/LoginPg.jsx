import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Login from '../../components/login/Login'
import { doLogout } from '../../redux/action';

export default function LoginPg() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doLogout())
  }, [])
  
  return (
    <div><Login/></div>
  )
}
