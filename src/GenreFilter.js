import React, { useState } from 'react';

const GenreFilter = ({ genres, onFilter }) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [minRating, setMinRating] = useState(0);

    const handleSubmit = (e) => {

        e.preventDefault();
        onFilter(selectedGenre, minRating);
    };

    return (

        <form onSubmit={handleSubmit}>
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
            <p>Select Rating</p>
            <input
                type="number"
                placeholder="Min rating"
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
            />
            <button type="submit">Filter</button>
        </form>
    );
};

export default GenreFilter;
