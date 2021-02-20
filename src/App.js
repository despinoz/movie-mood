import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import MovieDeck from "./components/MovieDeck";

const App = ({ themoviedbApiKey }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${themoviedbApiKey}`
      )
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
