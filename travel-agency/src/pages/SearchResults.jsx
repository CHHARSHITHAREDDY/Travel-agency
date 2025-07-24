import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import trips from '../data/trips.json';
import '../assets/styles/SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query')?.toLowerCase() || '';

  const [priceFilter, setPriceFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDurationFilter(e.target.value);
  };

  const filteredTrips = trips.filter((trip) => {
    const matchesQuery = query
      ? trip.destination.toLowerCase().includes(query)
      : true;

    const matchesPrice = priceFilter
      ? parseInt(trip.price) <= parseInt(priceFilter)
      : true;

    const matchesDuration = durationFilter
      ? trip.duration.toLowerCase() === durationFilter.toLowerCase()
      : true;

    return matchesQuery && matchesPrice && matchesDuration;
  });

  return (
    <div className="search-results-page">
      <h1>Search Results</h1>

      <div className="filter-bar">
        <label>
          Price:
          <select value={priceFilter} onChange={handlePriceChange}>
            <option value="">All</option>
            <option value="800">Up to $800</option>
            <option value="1000">Up to $1000</option>
            <option value="1200">Up to $1200</option>
          </select>
        </label>

        <label>
          Duration:
          <select value={durationFilter} onChange={handleDurationChange}>
            <option value="">All</option>
            <option value="5 days">5 days</option>
            <option value="7 days">7 days</option>
          </select>
        </label>
      </div>

      <div className="trip-grid">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <img src={trip.images[0]} alt={trip.destination} />
              <h2>{trip.destination}</h2>
              <p>Price: ${trip.price}</p>
              <p>Duration: {trip.duration}</p>
              <a href={`/trip/${trip.id}`}>View Details</a>
            </div>
          ))
        ) : (
          <p>No trips found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
