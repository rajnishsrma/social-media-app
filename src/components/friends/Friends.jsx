import React from 'react';
import './friends.css';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../redux/action';

export default function Friends({friend, connected, token}) {
    console.log(connected);

    const dispatch = useDispatch();

    const addFriendHandler = async () => {
      const response = await axios.put("http://localhost:3001/add-friend/"+friend.phone, {token });
      console.log(response);
      dispatch(addFriend(friend.phone));
      alert("connected")
    }

  return (
    <div className=''>
            
            <div className="d-flex justify-content-around align-items-center"  >
                          <h3>{friend.name}</h3>

                              {
              !connected ? <button style={{width : "100px"}} onClick={addFriendHandler}>Add</button> : <FaUserFriends />
            }</div>
                      </div>
  )
}
