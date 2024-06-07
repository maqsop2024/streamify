import { useState } from "react";
import axios from "axios";


function DisplayMovies(){

    let [movies,setMovies]=useState([{}]);
    let loadMoviesInfo =(event)=>{
    axios.get("http://localhost:3001/movies").then(result=>{
        setMovies(result.data)
    }).catch(error=>console.log(error))
}

    return(
        <div>
            <h4>All Movies</h4>
            <input type="button" value="Load Movies" onClick={loadMoviesInfo}/>
            <br/>
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
                    {movies.map(p=>
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.genre}</td>
                            <td>{p.rating}</td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>

    )
}

export default DisplayMovies