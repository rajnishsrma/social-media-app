import React from 'react';
import './navigationbar.css';

export default function NavigationBar() {
  return (
    <div className="navigation">
        <div>
            <input type="text" placeholder='search' />
            <button>search</button>
        </div>

        <div className="notification">
           <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
           <h3>user name</h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, delectus?</p>
        </div>
        <div className="notification">
           <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
           <h3>user name</h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
        <div className="notification">
           <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
           <h3>user name</h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, delectus?</p>
        </div>

        
    </div>
  )
}
