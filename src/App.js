import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './App.css';

const App = ({users}) => {
  return (
    <div className="App">
      <Routes location={"/"}>
        <Route path='/' element={<Home users={users} />} />
        <Route path='/users/:userId'/>
        <Route path='/users/:userId/posts'/>
        <Route path='/users/:userId/albums'/>
        <Route path="/users/:userId/albums/:albumId"/>
      </Routes>
    </div>
  );
}

export default App;
