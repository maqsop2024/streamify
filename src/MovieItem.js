import React from 'react';



function MovieItem({movie, genres} ) {

    const getGenreNames = (genreIds)=>{
        
        const genreNames = []

        for (let id of genreIds){
            const genre = genres.find((genre)=>genre.id === id)
            if (genre){
                genreNames.push(genre.name)
            }
        }
        return genreNames.join(", ")
    };

    return (<div>
        <h3>{movie.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        <strong>Rating:</strong> {movie.vote_average}
        <strong>Genre:</strong> {getGenreNames(movie.genre_ids)}
    </div>
    );

}
export default MovieItem;

