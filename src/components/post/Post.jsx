import React from 'react';
import './post.css';

function Post({post}){


    return <div className='post-container'>
                <div className="userdiv">
                    <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                   <div> <h4>user name </h4>
                    <h4>user text 1234 </h4>
                    </div>
                </div>

                <div className="post-txt-img">
                    <h2>{post.title}</h2>
                    <p></p>
               

                <div className="post-img">
                    <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="" />
                </div>
            </div>
    </div>
}

export default Post;

