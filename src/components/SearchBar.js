import TextField from "@material-ui/core/TextField";

const SearchBar = ({ handleOnInputChange }) => (
  <div
    style={{
      margin: "auto",
      textAlign: "center",
      backgroundColor: "white",
      position: "absolute",
      width: "400px",
      height: "45px",
      borderRadius: "100px",
      top: "25%",
    }}
  >
    <TextField
      style={{ width: "300px", marginTop: "5px" }}
      id="outlined-basic"
      placeholder="Search"
      onChange={handleOnInputChange}
      autoComplete="off"
    />
  </div>
);

export default SearchBar;
