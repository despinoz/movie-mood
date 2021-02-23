import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import MovieDeck from "./components/MovieDeck";
import SearchBar from "./components/SearchBar";
import Rating from "./components/Rating";
import Modal from "./components/Modal";
import banner from "./banner.png";

const App = ({ themoviedbApiKey }) => {
  const [results, setResults] = useState([]);
  const [filteredResults, setfilteredResults] = useState([]);
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState({});

  const initialFetch = () => {
    const params = qs.stringify({
      api_key: themoviedbApiKey,
    });
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?${params}`)
      .then(({ data }) => {
        setResults(data.results);
      });
  };

  useEffect(() => {
    initialFetch();
  }, []);

  useEffect(() => {
    if (query) {
      handleOnSearch(query);
    } else {
      initialFetch();
    }
  }, [query]);

  const handleOnSearch = (query) => {
    const params = qs.stringify({
      api_key: themoviedbApiKey,
      query: query,
    });
    axios
      .get(`https://api.themoviedb.org/3/search/movie?${params}`)
      .then(({ data }) => {
        const { results } = data;
        const filteredResults = results.filter((movie) => movie.poster_path);
        setRating(0);
        setResults(filteredResults);
      });
  };

  const handleOnRatingFilter = (rating) => {
    const filteredResults = results.filter(
      (movie) => movie.vote_average < rating && movie.vote_average >= rating - 2
    );
    setfilteredResults(filteredResults);
  };

  const handleOnInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCloseModal = () => {
    setSelectedMovie({});
  };

  const handleOnMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const ratingComponent = (
    <Rating
      handleOnRatingFilter={handleOnRatingFilter}
      rating={rating}
      setRating={setRating}
    />
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={banner} style={{ width: "65%", minWidth: "1250px" }} alt="" />
        <SearchBar handleOnInputChange={handleOnInputChange} />
      </div>
      <Modal
        open={!!Object.values(selectedMovie).length}
        handleCloseModal={handleCloseModal}
        selectedMovie={selectedMovie}
      />
      <div
        style={{
          width: useTheme().breakpoints.values.lg,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Boolean(results.length) ? (
          <div>
            <MovieDeck
              results={rating ? filteredResults : results}
              ratingComponent={ratingComponent}
              isSearchResult={query}
              handleOnMovieClick={handleOnMovieClick}
            />
          </div>
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
};

export default App;
