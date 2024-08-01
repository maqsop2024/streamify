import React, { useState } from 'react';

const SearchForm = ({ onSearch1 }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSearch(query);
        onSearch1(query)
    };

    return (
        <form onSubmit={handleSubmit}>
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
