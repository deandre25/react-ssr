import React from 'react';
import UserCard from "../UserCard/UserCard";
import './UsersList.module.css';

const UsersList = ({users}) => {
  return (
    <div className="container">
      <h1>Users</h1>
      <div className="cards">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;