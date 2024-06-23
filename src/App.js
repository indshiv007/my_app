import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import "./App.css";
import SearchIcon from "./search.svg";

// api key - 949f86d2

const API_URL = "https://www.omdbapi.com?apikey=949f86d2";
// const movie1 = {
//   Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//   Year: "2016",
//   imdbID: "tt18689424",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MoviesOP</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" 
            onClick={() => searchMovies(searchTerm)} 
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
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
