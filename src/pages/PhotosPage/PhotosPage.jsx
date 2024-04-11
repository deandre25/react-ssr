import React from 'react';
import { Link } from 'react-router-dom';
import './PhotosPage.module.css';

const PhotosPage = ({photos}) => {
  return (
    <div className="photoPage">
      <h1>Photos</h1>
      <Link to="/">Back to Home</Link>
      <div className="photoContainer">
        {photos.map(photo => (
          <div key={photo.id} className="photoCard">
            <img alt='logo' src={photo.thumbnailUrl} />
            <div className="cardContent">
              <span>{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default PhotosPage;
