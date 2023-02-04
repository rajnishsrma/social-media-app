import React from 'react';
import './friends.css';
import { FaUser } from 'react-icons/fa';
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
    <div className='friends-container'>
        <div className="friend">
            <h3>{friend.name}</h3>
            <span><FaUser /></span>
            {
              !connected && <button onClick={addFriendHandler}>Add</button>
            }
        </div>
    </div>
  )
}
