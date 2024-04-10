import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PhotosPage.module.css';

const PhotosPage = () => {
  const { albumId, photoId } = useParams();
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [albumId, photoId]);

  if (!photos) return <div>Loading...</div>;

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
            <div className="cardAction">
              <Link to="/">This is a link</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default PhotosPage;
