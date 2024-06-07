import axios from "axios";
import { useState } from "react";

function DeleteMovie(){

    let [id, setId] = useState("");
    let [msg, setMessage] = useState("") 

    let deleteMovie = (event) => {
        event.preventDefault();
        axios.delete("http://localhost:3001/movies/"+ id).then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error)
            setMessage("Movie Not Found -"  + " " +error.message)
        })
        
        setId("");
    }

    return (

        <div>
            <h4>Delete Movie</h4>
            <span style={{ "color": "red" }}>{msg}</span>
            <form onSubmit={deleteMovie}>
                <label>Id</label>
                <input type="number" name="id" onChange={(event) => setId(event.target.value)} /><br />
                <input type="submit" value="Delete Movie" />

            </form>
        </div>
    )


}

export default DeleteMovie