import React, { useState, useEffect } from 'react';
import UserList from '../components/UsersList/UsersList.jsx';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Home;
