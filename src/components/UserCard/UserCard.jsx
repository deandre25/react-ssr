import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.module.css';

const UserCard = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="block bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone}</p>
      <div className="mt-2">
        <Link to={`/users/${user.id}/posts`} className="text-blue-500 hover:underline mr-4">View User's Posts</Link>
        <Link to={`/users/${user.id}/albums`} className="text-blue-500 hover:underline">View User's Albums</Link>
      </div>
    </Link>
  );
};

export default UserCard;