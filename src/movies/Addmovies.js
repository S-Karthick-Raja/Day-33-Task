import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "./global_constants";

export function Addmovies() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const addMovie = () => {
    const newMovies = {
      name,
      rating,
      summary,
      poster,
      trailer,
    }; //shorthand
    // setMovies([...movies, newMovies]);

    // 1. Method -> POST
    // 2. Body -> data & JSON
    // 3. Header -> JSON

    fetch(`${API_URL}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovies),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
  };
  return (
    <div className="wrap-movie-list">
      <div className="Add-movie-list">
        <TextField
          className="text-field"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Movie Name"
          color="primary"
          focused
        />
        <TextField
          className="text-field"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          label="Rating / 10"
          color="primary"
          type="number"
          focused
        />
        <TextField
          className="text-field"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          color="primary"
          focused
        />
        <TextField
          className="text-field"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          label="Poster Url"
          color="primary"
          type="url"
          focused
        />
        <TextField
          className="text-field"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer embed code"
          color="primary"
          type="url"
          focused
        />
      </div>
      <div className="add-button">
        <Button onClick={addMovie} variant="contained" endIcon={<SendIcon />}>
          {" "}
          Add Movie{" "}
        </Button>
      </div>
    </div>
  );
}
