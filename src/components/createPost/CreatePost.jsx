import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import "./createpost.css";

export default function CreatePost({token}) {

    

    const [createPost, setCreatePost] = useState("");
    const [visibility, setVisibility] = useState();

    const submitHandler = async () => {
        let newPost = {
            title : createPost,
            visibility : visibility,
            token : token
        }

        console.log(newPost);

        const submitPost = await axios.post("http://localhost:3001/posts/create", newPost);
        alert("post created");
    }


  return (
    <div className='createpost-container'>
         <div className="visibility-container">
            <select onChange={(e) => setVisibility(e.target.value)} name="visibility" id="visibility">
                <option value="public">public <FaUpload /></option>
                <option value="private">private</option>
                <option value="friends">friends</option>
            </select>
        </div>

        <textarea type="text" placeholder='type your post here' onChange={(e) => setCreatePost(e.target.value)}>{createPost}</textarea>
        <button onClick={submitHandler}>submit post</button>

       
    </div>
  )
}
