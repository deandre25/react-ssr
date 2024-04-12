import React from 'react';
import { Link } from 'react-router-dom';
import './UserAlbums.module.css';

const UserAlbums = ({ albums, userId }) => {
  return (
    <div className="container">
      <h1 className="title">User Albums</h1>
      <Link to={`/users/${userId}`} className="link">Back to User Details</Link>
      <div className="albumsContainer">
        {albums.map(album => (
          <div key={album.id} className="albumCard">
            <h2 className="albumTitle">{album.title}</h2>
            <Link to={`/users/${userId}/albums/${album.id}`} className="viewAlbumLink">View Album</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAlbums;
