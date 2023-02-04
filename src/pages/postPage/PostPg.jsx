import React from 'react'
import Post from '../../components/post/Post'

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CreatePost from '../../components/createPost/CreatePost';
import { useState } from 'react';
import axios from 'axios';

export default function PostPg() {

  const reduxState = useSelector(function (data) {
    return data;
  });


  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  
  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    const data = response.data ;
    console.log(data)
    setPosts(data)
  }

  console.log(reduxState)

  const navigate = useNavigate();

  useEffect(() => {
    if (!reduxState.user) {
      navigate("/login")
    }else{
      setUser(reduxState.user);
      fetchPosts()
    }
  }, [])

  return (
    <div>
      <CreatePost token={user.token}/>
      {
        posts.map((p) => <Post post={p} />)
      }
      </div>
  )
}
