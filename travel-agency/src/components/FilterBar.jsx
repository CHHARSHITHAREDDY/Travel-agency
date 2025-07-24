import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="filter-bar">
      <label>
        Price:
        <select value={filters.price} onChange={(e) => setFilters({ ...filters, price: e.target.value })}>
          <option value="all">All</option>
          <option value="below1000">Below ₹1000</option>
          <option value="1000plus">₹1000 and above</option>
        </select>
      </label>

      <label>
        Duration:
        <select value={filters.duration} onChange={(e) => setFilters({ ...filters, duration: e.target.value })}>
          <option value="all">All</option>
          <option value="5">5 days</option>
          <option value="7">7 days</option>
        </select>
      </label>
    </div>
  );
};

export default FilterBar;
