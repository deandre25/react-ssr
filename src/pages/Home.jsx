import React from 'react';
import UserList from '../components/UsersList/UsersList.jsx';

const Home = ({users}) => {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Home;
