import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import UserPosts from './pages/UserPosts/UserPosts.jsx';
import UserAlbums from './pages/UserAlbums/UserAlbums.jsx';
import PhotosPage from './pages/PhotosPage/PhotosPage.jsx';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage.jsx';
import './App.css';
import UsersList from './components/UsersList/UsersList.jsx';

const App = (users) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data));
  // }, []);

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
  // return (
  //   <div className="App">
  //     <Router>
  //       <Routes>
  //         <Route path='/' element={<Home />} />
  //         <Route path='/users/:userId' element={<UserDetailsPage />} />
  //         <Route path='/users/:userId/posts' element={<UserPosts />} />
  //         <Route path='/users/:userId/albums' element={<UserAlbums />} />
  //         <Route path="/users/:userId/albums/:albumId" element={<PhotosPage />} />
  //       </Routes>
  //     </Router>
  //   </div>
  // );
}

export default App;
