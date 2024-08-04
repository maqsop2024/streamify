import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import SearchForm from "./SearchForm";
import GenreFilter from "./GenreFilter";
import { fetchGenres } from "./MovieApi"; // list of all API service
import ErrorMessage from "./ErrorMessage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenresData = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data.genres);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchGenresData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Movie App</h1>
        <div className="header_inputs">
          <SearchForm
            setMovies={setMovies}
            setLoading={setLoading}
            setError={setError}
          />

          {genres.length > 0 && (
            <GenreFilter
              genres={genres}
              setMovies={setMovies}
              setLoading={setLoading}
              setError={setError}
            />
          )}
        </div>
      </div>
      {error && <ErrorMessage message={error} />}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={movies} genres={genres} />
      )}
    </div>
  );
};

export default App;
