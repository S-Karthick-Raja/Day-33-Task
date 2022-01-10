import { Movies } from "./Movies";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "./global_constants";

export function MovieList() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  // GET - METHOD
  const getMovies = () => {
    fetch(`${API_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, []);

  // DELETE - METHOD //after deleting -> refresh
  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id }) => (
        <Movies
          key={id}
          id={id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          deleteButton={
            <IconButton
              onClick={() => deleteMovie(id)}
              color="error"
              aria-label="delete-movie"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              color="success"
              aria-label="edit-movie"
              onClick={() => history.push("/movies/edit/" + id)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
