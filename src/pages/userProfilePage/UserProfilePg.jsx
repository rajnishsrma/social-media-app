import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../../components/userProfile/UserProfile'

export default function UserProfilePg() {

  const reduxState = useSelector(function (data) {
    return data;
  });

  console.log(reduxState)

  const navigate = useNavigate();

  useEffect(() => {
    if (!reduxState.user) {
      navigate("/login")
    }
  }, [])
  
  return (
    <div>
        <UserProfile />
    </div>
  )
}
