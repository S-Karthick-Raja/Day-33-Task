import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_URL } from "./global_constants";

export function Editmovies() {
  const { id } = useParams();
  const [movie, setMovies] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovies(mv));
  }, [id]);

  // only show the update movie when the data is available
  return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({ movie }) {
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [poster, setPoster] = useState(movie.poster);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();

  const editmovie = (id) => {
    const UpdatedMovie = {
      name,
      rating,
      summary,
      poster,
      trailer,
    };

    fetch(`${API_URL}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(UpdatedMovie),
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
        <Button
          onClick={editmovie}
          color="success"
          variant="contained"
          endIcon={<SendIcon />}
        >
          {" "}
          Save{" "}
        </Button>
      </div>
    </div>
  );
}
