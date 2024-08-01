import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import GenreFilter from './GenreFilter';
import { searchMovies, fetchGenres, browseMovies } from './MovieApi'; // list of all API service

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

    const handleSearch = async (query) => {
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

    const handleFilter = async (genreId, minRating) => {
        setLoading(true);
        setError(null);
        try {
            const data = await browseMovies(genreId, minRating);
            setMovies(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Movie App</h1>

            <SearchForm onSearch1={handleSearch} />
            
            { genres.length > 0 && <GenreFilter genres={genres} onFilter={handleFilter} />}

            {error && <div>Error: {error}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <MovieList movies={movies} genres={genres} />
            )}
        </div>
    );
};

export default App;
