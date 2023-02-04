import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import './userprofile.css';
import {FaUserPlus} from 'react-icons/fa'
import Data from '../DUMMY-DATA.json'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UserProfile() {

    const reduxState = useSelector(function (data) {
        return data ;
      });

      const [user, setUser] = useState();

      useEffect(()=>{
        setUser(reduxState.user)
      },[])

  return (
    <div className='profile-container'>

        <SearchBox data={Data} d= "jasdf"/>
          <div className="userprofile">
                        <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                    <div className='userprofile-text'> 
                            <h4>{user && user.name} </h4>
                            <h4>{user?.phone} </h4>
                            <p><b>Discription :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet in voluptatum ipsum, repudiandae consequatur exercitationem eaquereprehenderit ipsa ratione.</p>
                   </div>
         </div>
                <br/>

        <div className="connection-wrapper">

            <div className="myconnection-heading">My Connections</div>

            <div className="connections">
                <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />

            <a ><h4>user name</h4></a>
            <h4> 4 mutual connection</h4>
            <a href='/'>< FaUserPlus /></a>
                

            </div>
            <div className="connections">
                <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />

                <a><h4>user name</h4></a>
                <a href='/'>< FaUserPlus /></a>

            </div>
            <div className="connections">
                <img src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="" />

                <a><h4>user name</h4></a>
                <a href='/'>< FaUserPlus /></a>

            </div>
        </div>
    </div>
  )
}
