import { useState, useEffect } from "react";
import axios from "axios";

/*
https://api.themoviedb.org/3/movie/550?api_key=a91e104c917209d684e690ba9b307370
now_playing?language=en-US&page=1

*/

function MovieService() {


    const apiKey = process.env.REACT_APP_API
    // console.log(apiKey)
    
    const [movies, setMovies] = useState([])
    const [pageNum, setPageNum] = useState(1); //initializing page to 1 so when calling the API for the first time it gets those movies from page 1 
    const [showPrevButton, setShowPrevButton] = useState(false)
    const API_BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing'
    // let loadMoviesInfo = (event) => {
    //     const apiKey = process.env.REACT_APP_API
    //     // console.log(apiKey)
    //     const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}&page=${pageNum}`
    //     axios.get(url).then(response => {
    //         // console.log(response.data.results)
    //         console.log(response)
    //         setMovies(response.data.results)
    //         console.log(movies)
    //     }).catch(error => console.log(error))

    //     if (pageNum === 1)
    //         setShowPrevButton(false)
    //     else
    //         setShowPrevButton(true)
    // }

    const loadMoviesInfo = async (filters) => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}&page=${pageNum}`
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          console.error('Error fetching movies:', error);
          throw error;
        }
      };
      

    let handleLoadPrev = () => {

        if (pageNum > 1 ){
        setPageNum(pageNum - 1);
        loadMoviesInfo()
        }
    }

    let handleLoadNext = () => {

        setPageNum(pageNum + 1);
        loadMoviesInfo()
    }

    useEffect(() => {
        loadMoviesInfo();
      });

    return (
        <div>
            <h4>Now Playing</h4>
            {/* <input type="button" value="Load Movies" onClick={loadMoviesInfo} /> */}
            <br />
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(p =>
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.genre_ids}</td>
                            <td>{p.rating}</td>
                        </tr>

                    )}
                </tbody>
            </table>
            
            <div>
                <p>Displaying page {pageNum}</p>
                { !showPrevButton ? "" : <button onClick={handleLoadPrev} > Prev Page</button>}
                <button onClick={handleLoadNext} > Next Page</button>
            </div>

        </div>
        

    )
}

export default MovieService