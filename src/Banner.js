import React , { useState , useEffect } from 'react';
import axios from "axios";
import requests from "./requests.js";
import "./Banner.css";

function Banner() {
    const [movie,setmovie] =useState([]);

    useEffect( () =>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixoriginals);
            setmovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]);
            return request;

        }
        fetchData();


    },[]);

return (
    <header className="banner"    
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
    }}
    >
    <div className="bann_cont">
        <h1 className='bann_tit'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='bann_butt'>
            <button className="bann_but">Play</button>
            <button className="bann_but">Mylist</button>

            <h1 className='bann_desc'>
                {movie.overview}

            </h1>

        </div>




    </div>


    </header>
    
  )
}

export default Banner