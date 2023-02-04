import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Friends from '../../components/friends/Friends'

export default function FriendsPg() {
    
  const reduxState = useSelector(function (data) {
    return data;
  });

  const navigate = useNavigate();


    const [friends, setFriends] = useState([]);
    const [user, setUser] = useState();


    const fetchFriendsApi = async () =>{
        const response = await axios.get("http://localhost:3001/friends");
        console.log(response)
        setFriends(response.data)
    }

    useEffect(()=>{
        if(reduxState.user){
            setUser(reduxState.user)
            fetchFriendsApi()
        }else{
            navigate("/login")
        }
    }, [])

  return (
    <div>
        {
            friends.map((frnd)=>{
                console.log(frnd.phone , user.friends)
                return  user.phone != frnd.phone  && < Friends token = {user.token} connected={user?.friends.filter(f => f == frnd.phone).length ? true : false} friend = {frnd} />
            })
        }
        
      
    </div>
  )
}
