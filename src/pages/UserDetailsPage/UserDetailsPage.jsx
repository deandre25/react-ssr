import React from "react";
import { Link } from "react-router-dom";
import './UserDetails.module.css';

const UserDetailsPage = ({user}) => {
  return (
    <div className="userDetails">
      <Link to={`/`}>Back to Home page</Link>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p className="address"><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p className="geo"><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
      <Link to={user.website}><strong>Website:</strong> {user.website}</Link>
      <p className="company"><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company.bs}</p>
    </div>
  );
}

export default UserDetailsPage;