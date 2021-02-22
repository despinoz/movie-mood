import { useCallback, useEffect } from "react";
import debounce from "lodash/debounce";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";

const SearchBar = ({ handleOnSearch, query, setQuery, initialFetch }) => {
  const debouncedInputChange = useCallback(debounce(handleOnSearch, 400), []);

  const handleOnInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query) {
      debouncedInputChange(query);
    } else {
      initialFetch();
    }
  }, [query, debouncedInputChange]);

  return (
    <div
      style={{
        width: useTheme().breakpoints.values.lg,
        height: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <div>{query}</div>
      <TextField
        style={{ backgroundColor: "white", marginTop: "100px" }}
        id="outlined-basic"
        placeholder="Search"
        onChange={handleOnInputChange}
      />
    </div>
  );
};

export default SearchBar;
