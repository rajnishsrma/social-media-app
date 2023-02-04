import React from 'react';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/topmenu/TopMenu';
import LoginPg from './pages/loginPage/LoginPg';
import PostPg from './pages/postPage/PostPg';
import SignUpPg from './pages/signUpPage/SignUpPg';
import UserProfilePg from './pages/userProfilePage/UserProfilePg';
import FriendsPg from './pages/friendspage/FriendsPg';

function App() {
  return (
    <div>
    <BrowserRouter>
      <TopMenu />
      <Routes>
        <Route path='/login' element={< LoginPg/>} />
        <Route path='/signup' element={< SignUpPg/>} />
        <Route path='/postpg' element={<PostPg />} />
        <Route path='/userprofile' element={<UserProfilePg />} />
        <Route path='/friends' element={<FriendsPg />} />
      </Routes>
    </BrowserRouter>
     
     
    </div>
  );
}

export default App;
