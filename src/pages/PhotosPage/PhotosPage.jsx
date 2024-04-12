import React from 'react';
import { Link } from 'react-router-dom';
import './PhotosPage.module.css';

const PhotosPage = ({ photos }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">Back to Home</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={photo.thumbnailUrl} alt="Photo" />
            <div className="p-4">
              <span className="block text-gray-800 font-semibold">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default PhotosPage;
