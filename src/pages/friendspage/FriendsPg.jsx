import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Friends from '../../components/friends/Friends'
import { storeUsers } from '../../redux/action';

export default function FriendsPg() {
    
  const reduxState = useSelector(function (data) {
    return data;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()


    const [friends, setFriends] = useState([]);
    const [user, setUser] = useState();


    const fetchFriendsApi = async (name) =>{
        const response = await axios.get("http://localhost:3001/friends");
        console.log(response)
        dispatch(storeUsers(response.data));
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

    const inputHandler = (e) => {
       let filtFrnd =  reduxState.all_users.filter(frnd => frnd.name.toLowerCase().includes(e.target.value.toLowerCase()))
         setFriends(filtFrnd)
    }

  return (
    <div>
       <label>Friends : </label>
       <input type="text" placeholder='Search Friends' onChange={inputHandler}/>
        {
            friends.map((frnd)=>{
                console.log(frnd.phone , user.friends)
                return  user.phone != frnd.phone  && < Friends token = {user.token} connected={user?.friends.filter(f => f == frnd.phone).length ? true : false} friend = {frnd} />
            })
        }
        
      
  </div>
  )
}
