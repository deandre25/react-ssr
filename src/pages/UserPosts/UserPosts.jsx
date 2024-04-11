import React from 'react';
import { Link } from 'react-router-dom';
import './UserPosts.module.css';

const UserPosts = ({posts, userId}) => {
  return (
    <div className="userPosts">
      <h1>User Posts</h1>
      <Link to={`/users/${userId}`}>Back to User Details</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
