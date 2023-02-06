import React from 'react';
import './postsidebar.css';
import { FaAccusoft, FaBuyNLarge, FaTools, FaUser, FaUserFriends } from 'react-icons/fa'

function PostSidebar() {
  return (
    <div className='sidebar-container'>
        <ul>
            <li><a href="">My Profile <FaUser /></a></li>
            <li><a href="">My connectios <FaUserFriends /></a></li>
            <li><a href="">My Account <FaAccusoft /></a></li>
            <li><a href="">Setting <FaTools /></a></li>
            <li><a href="">Logout <FaBuyNLarge /></a></li>
        </ul>
    </div>
  )
}

export default PostSidebar