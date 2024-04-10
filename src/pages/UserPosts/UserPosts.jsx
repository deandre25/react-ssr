import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './UserPosts.module.css';

const UserPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data));

    console.log(posts)
  }, [userId]);

  return (
    <div className={styles.userPosts}>
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
