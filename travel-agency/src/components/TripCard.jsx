import React from 'react';
import { Link } from 'react-router-dom';

const TripCard = ({ trip }) => (
  <div className="trip-card">
    <img src={trip.images[0]} alt={trip.destination} />
    <h3>{trip.destination}</h3>
    <p>Price: ${trip.price}</p>
    <p>Duration: {trip.duration}</p>
    <Link to={`/trip/${trip.id}`}>View Details</Link>
  </div>
);

export default TripCard;
