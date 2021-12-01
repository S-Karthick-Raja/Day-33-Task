// import { Edit } from "@mui/icons-material";
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
  // App is mounted -> useEffect only once -> fetch -> setMovies

  // GET - METHOD
  // 1.useEffect syntax to fetch
  const getMovies = () => {
    fetch(`${API_URL}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, []);

  // 2.Async & Await syntax to fetch
  // useEffect( () => {
  //     async function getMovies() {
  //         const data = await fetch (
  //           "${API_URL}/movies"
  //         );
  //         const mvs = await data.json();
  //         setMovies(mvs);
  //     }
  //     getMovies();
  // }, []);

  // DELETE - METHOD //after deleting -> refresh
  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id, _id }) => (
        <Movies
          key={id}
          id={id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          deleteButton={
            <IconButton
              onClick={() => deleteMovie(_id)}
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
              onClick={() => history.push("/movies/edit/" + _id)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
