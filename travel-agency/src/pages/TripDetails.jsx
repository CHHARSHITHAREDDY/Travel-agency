import React from 'react';
import { useParams } from 'react-router-dom';
import tripsData from '../data/trips.json';
import '../assets/styles/TripDetails.css';

const TripDetails = () => {
  const { id } = useParams();
  const tripId = parseInt(id);
  const trip = tripsData.find((trip) => trip.id === tripId);

  if (!trip) {
    return <div className="trip-details-page"><p>Trip not found.</p></div>;
  }

  return (
    <div className="trip-details-page">
      <div className="trip-details-container">
        <h1>{trip.destination}</h1>
        <p><strong>Price:</strong> ${trip.price}</p>
        <p><strong>Duration:</strong> {trip.duration}</p>
        <p><strong>Rating:</strong> {trip.rating} ⭐</p>

        <div className="trip-details-images">
          {trip.images.map((img, index) => (
            <img key={index} src={img} alt={`Trip ${index + 1}`} />
          ))}
        </div>

        <h3>Itinerary:</h3>
        <ul>
          {trip.itinerary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a href="/search">← Back to Search</a>
      </div>
    </div>
  );
};

export default TripDetails;
