import axios from "axios";

/*
https://api.themoviedb.org/3/movie/550?api_key=a91e104c917209d684e690ba9b307370
now_playing?language=en-US&page=1

*/

const apiKey = process.env.REACT_APP_API
// console.log(apiKey)

export const fetchMovies = async (pageNum) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}&page=${pageNum}`
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};     