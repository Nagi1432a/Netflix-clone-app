import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";
function Row({ title , fetchUrl , isLarger }) {
    const [ movies , setmovies ] = useState([]);
    const [ trailerUrl , settrailerUrl ] = useState("");

    useEffect ( () => {
        async function fetchData(){
        const req=await axios.get(fetchUrl);
        setmovies(req.data.results);
        return req;
        }
        fetchData();
}, [fetchUrl]);
const opts={
    height:"390",
    width:"100%",
    playerVars : {
        

    autoplay: 1,

},
}

const handleClick = (movie) => {
    if(trailerUrl){
        settrailerUrl('');

    }else{
        movieTrailer(movie?.name || "")
        .then((url) => {
            const urlParams=new URLSearchParams(new URL(url).search);
            settrailerUrl(urlParams.get("v"));




        }).catch(error => console.log(error))


    }
     



};


    
return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map( movie => (
                <img 
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLarger && "row1"}`}
                src={`${base_url}${isLarger ? movie.poster_path : movie.drop_path }`} alt={movie.name}></img>

            )
            )}
            <div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>

        </div>



    </div>
  )
}

export default Row;