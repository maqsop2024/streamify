
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { fetchMovies } from './MovieService';
// import MovieList from './MovieList';

import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './MovieList';
import SearchForm from './SearchForm';
import GenreFilter from './GenreFilter';
import { searchMovies, fetchGenres, browseMovies } from './MovieApi';




// function App() {
//   return (
//     <div className="App">
//       <h2>Movies Management System</h2>
//       {/* <AddMovie></AddMovie> */}
//       <hr/>
//       <DisplayMovies></DisplayMovies>
//       <hr/>
//       {/* <DeleteMovie></DeleteMovie> */}
//     </div>
//   );
// }

const App = ()=> {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [showPrevButton, setShowPrevButton] = useState(false)

  let handleLoadPrev = () => {

    if (pageNum > 1 ){
    setPageNum(pageNum - 1);
    
    }
}

let handleLoadNext = () => {

    setPageNum(pageNum + 1);
}

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies(pageNum);
        setMovies(data);
        if (pageNum === 1)
            setShowPrevButton(false)
        else
            setShowPrevButton(true)
      } catch (error) {
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNum]);


  return (
    <div>
      <h1>Streamify</h1>      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
      <div>
                <p>Displaying page {pageNum}</p>
                { !showPrevButton ? "" : <button onClick={handleLoadPrev} > Prev Page</button>}
                <button onClick={handleLoadNext} > Next Page</button>
            </div>
    </div>
    
  );
};



  //   return (
  //     <div className="App">
  //       <h2>Movies Management System</h2>
  //       {/* <AddMovie></AddMovie> */}
  //       <hr/>
  //       <DisplayMovies></DisplayMovies>
  //       <hr/>
  //       {/* <DeleteMovie></DeleteMovie> */}
  //     </div>
  //   );
  // }

export default App;
