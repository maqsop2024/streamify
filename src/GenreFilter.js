import React, { useState } from "react";
import { browseMovies } from "./MovieApi";

const GenreFilter = ({ genres, setMovies, setLoading, setError }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    try {
      const data = await browseMovies(selectedGenre, minRating);
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    
    <form className="filter_form" onSubmit={handleSubmit}>
      <p>Search By Genre and Rating</p>  
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <p>Enter Rating</p>
      <input
        type="number"
        placeholder="Min rating"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GenreFilter;
