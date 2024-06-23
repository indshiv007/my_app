//why jsx extension
//whenever creating any new react component jsx extension is 

import React from "react";

const MovieCard = ({ movie }) => {//here we need to use props 
    // but instead of doing props.xyz everywhere we use 
    // object destructuring as { movie } in place of props (parameter of the fun)
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;