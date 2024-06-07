/* 
coming soon image url
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQygfWGpZ_EzEUiATP2-ig9PDJAUOSXwGLbw&s    

*/

import axios from "axios";
import { useState } from "react";

function AddMovie() {

    let [id, setId] = useState("");
    let [title, setTitle] = useState("");
    // let [posterURL, setPosterURL] = useState("")
    let [genre, setGenre] = useState("");
    let [rating, setRating] = useState("")
    let [msg, setMessage] = useState("")

    let storeMovie = (event) => {
        console.log(event)
        event.preventDefault();     // disable default form action 
        let movie = { "id": id, "title": title, "genre": genre, "rating": rating }
        //console.log(product)
        if (id.length == 0 || title.length == 0 || genre.length == 0 || rating.length == 0) {
            //alert("plz enter all product info")
            setMessage("Plz enter all information")
        } else {
            axios.post("http://localhost:3001/movies", movie).then(result => {
                console.log(result)
            }).catch(error => console.log(error))
            setMessage("")
        }

        reset();
    }
    let reset = (event) => {
        setId("")
        setTitle("")
        // setPosterURL("")
        setGenre("")
        setRating("")
    }
    return (
        < div >
            <span style={{ "color": "red" }}>{msg}</span>
            <h4>Add Movie</h4>
            <form onSubmit={storeMovie}>
                <label>Id</label>
                <input type="number" name="id" onChange={(event) => setId(event.target.value)} value={id} /><br />
                <label>Title</label>
                <input type="text" name="title" onChange={(event) => setTitle(event.target.value)} value={title} /><br />
                {/* <label>Poseter URL</label>
                <input type="text" name="posterURL" onChange={(event) => setPosterURL(event.target.value)} value={posterURL} /><br /> */}
                <label>Genre</label>
                <input type="text" name="genre" onChange={(event) => setGenre(event.target.value)} value={genre} /><br />
                <label>Rating</label>
                <input type="number" name="rating" onChange={(event) => setRating(event.target.value)} value={rating} /><br />
                <input type="submit" value="Add Movie" />
                <input type="reset" value="reset" onClick={reset} />
            </form>
        </div >

    )
}

export default AddMovie;