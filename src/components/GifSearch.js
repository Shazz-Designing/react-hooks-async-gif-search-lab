import React, { useState } from "react";

function GifSearch({ fetchGifs }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the query to the parent component for data fetching
    fetchGifs(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search for GIFs:</label>
      <input
        type="text"
        id="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
