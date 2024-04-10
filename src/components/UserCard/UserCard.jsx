import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.module.css';

const UserCard = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="card">
      <h2 className="name">{user.name}</h2>
      <p className="email">Email: {user.email}</p>
      <p className="phone">Phone: {user.phone}</p>
      <div className="containerLink">
        <Link className="link" to={`/users/${user.id}/posts`}>View User's Posts</Link>
        <Link className="link" to={`/users/${user.id}/albums`}>View User's Albums</Link>
      </div>
    </Link>
  );
};

export default UserCard;