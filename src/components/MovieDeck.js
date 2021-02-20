import { useRef, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";

const MovieDeck = ({ results }) => {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= results.length) {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ display: loading ? "block" : "none" }}>
        <CircularProgress />
      </div>
      <div
        style={{
          display: loading ? "none" : "flex",
          width: useTheme().breakpoints.values.lg,
          textAlign: "center",
        }}
      >
        <div style={{ margin: "auto" }}>
          {results.map((movie) => (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Poster Path"
              onLoad={imageLoaded}
              width="200"
              style={{ margin: "10px" }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDeck;
