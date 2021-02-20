import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import MovieDeck from "./components/MovieDeck";

const App = ({ themoviedbApiKey }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const params = qs.stringify({
      api_key: themoviedbApiKey,
      sort_by: "popularity.desc",
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
  }, []);

  return (
    <div style={{ width: useTheme().breakpoints.values.lg, margin: "auto" }}>
      {Boolean(results.length) ? (
        <MovieDeck results={results} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default App;
