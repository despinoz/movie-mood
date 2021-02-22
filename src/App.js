import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import MovieDeck from "./components/MovieDeck";
import SearchBar from "./components/SearchBar";

const App = ({ themoviedbApiKey }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const initialFetch = () => {
    const params = qs.stringify({
      api_key: themoviedbApiKey,
    });
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?${params}`)
      .then(({ data }) => {
        setResults(data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    initialFetch();
  }, []);

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
        setResults(filteredResults);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  

  return (
    <>
      <SearchBar
        handleOnSearch={handleOnSearch}
        initialFetch={initialFetch}
        query={query}
        setQuery={setQuery}
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
          <MovieDeck results={results} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
    </>
  );
};

export default App;
