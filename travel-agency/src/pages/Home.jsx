// src/pages/Home.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Home.css';


function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="home">
      <h1>Find Your Dream Vacation</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search destination..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Home;
