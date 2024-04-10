import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './UserDetails.module.css';

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className={styles.userDetails}>
      <Link to={`/`}>Back to Home page</Link>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p className={styles.address}><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p className={styles.geo}><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
      <Link to={user.website}><strong>Website:</strong> {user.website}</Link>
      <p className={styles.company}><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company.bs}</p>
    </div>
  );
}

export default UserDetailsPage;