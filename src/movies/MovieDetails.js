import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./global_constants";

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movies[id];
  const history = useHistory();

  const [movie, setMovies] = useState({});
  useEffect ( () => {
    fetch(`${API_URL}/movies/${id}`, {method:"GET"})
    .then((data) => data.json())
    .then((mv) => setMovies(mv))
  }, [id]);

  const styles = {
    color: movie.rating < 7.5 ? "crimson" : "green",
    fontWeight: "bold"
  };
  return (
    <div>
      <iframe
        width="100%"
        height="580"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-page">
        <h3 className="movie-name-page"> {movie.name} </h3>
        <p style={styles}>
          <span class="fa fa-star checked"></span>
          {movie.rating}</p>
      </div>
      <p className="movie-summary-page" style ={{color : movie.summary === "dark" ? "light" : "dark"}}>{movie.summary}</p>
      <Button 
      style = {{marginLeft:"15px", marginBottom:"40px"}}
      onClick={ () => history.goBack()}
      variant="outlined" 
      startIcon={<KeyboardBackspaceIcon />}
      >Back</Button>
    </div>
  );
}
