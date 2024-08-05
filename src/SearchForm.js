import React, { useState } from "react";
import { searchMovies } from "./MovieApi";

const SearchForm = ({ setMovies, setLoading, setError }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      setMovies(data.results);      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search_form" onSubmit={handleSubmit}>
        <p>Search by Movie or Actor Name</p>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
