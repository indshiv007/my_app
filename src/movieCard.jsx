import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img
          src={movie.poster !== 'N/A' ? movie.poster : 'https://via.placeholder.com/400'}
          alt={movie.title}
        />
      </div>

      <div>
        <h3>{movie.title}</h3>
        <p>{movie.type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
