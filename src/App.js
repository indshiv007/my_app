import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_KEY = "09b3f8ee3b08b8a56ec5056701027925";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();

    const simplifiedMovies = data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image",
      type: "Movie",
    }));

    setMovies(simplifiedMovies);
  };

  useEffect(() => {
    searchMovies("harry");
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  const handleTitleClick = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <h1 onClick={handleTitleClick}>MoviesOP</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found !!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
