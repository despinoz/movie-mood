import { useRef, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import SearchIcon from "@material-ui/icons/Search";

const MovieDeck = ({
  handleOnMovieClick,
  isSearchResult,
  ratingComponent,
  results,
}) => {
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
            justifyContent: "space-between",
            display: "flex",
            height: "80px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "left",
              alignItems: "center",
              display: "flex",
              fontSize: "18px",
              fontWeight: "bold",
              color: "gray",
            }}
          >
            {isSearchResult ? (
              <SearchIcon
                fontSize="large"
                style={{ marginRight: "10px", color: "#d31718" }}
              />
            ) : (
              <WhatshotOutlinedIcon
                fontSize="large"
                style={{ marginRight: "10px", color: "#d31718" }}
              />
            )}
            {isSearchResult ? "Search Results" : "Popular Movies"}
          </div>
          <div>{ratingComponent}</div>
        </div>
        <div style={{ margin: "auto" }}>
          {results.map((movie, i) => (
            <img
              alt="Poster Path"
              key={movie.id}
              onLoad={imageLoaded}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              style={{ margin: "10px" }}
              width="150"
              onClick={() => handleOnMovieClick(movie)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDeck;
