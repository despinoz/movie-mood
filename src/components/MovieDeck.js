import { useRef, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";

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
          width: useTheme().breakpoints.values.md,
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            textAlign: "left",
          }}
        >
          <WhatshotOutlinedIcon />
          Popular Movies
        </div>
        <div style={{ margin: "auto" }}>
          {results.map((movie) => (
            <img
              alt="Poster Path"
              key={movie.id}
              onLoad={imageLoaded}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              style={{ margin: "10px" }}
              width="150"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDeck;
