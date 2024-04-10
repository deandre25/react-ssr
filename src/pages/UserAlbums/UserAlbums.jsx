import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './UserAlbums.module.css';

const UserAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div className={styles.container}>
      <h1>User Albums</h1>
      <Link to={`/users/${userId}`}>Back to User Details</Link>
      <div className={styles.albumsContainer}>
        {albums.map(album => (
          <div key={album.id} className={styles.albumCard}>
            <h2>{album.title}</h2>
            <Link to={`/users/${userId}/albums/${album.id}`}>View Album</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAlbums;
