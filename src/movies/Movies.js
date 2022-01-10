import { useState } from "react";
import { Counter } from "./Counter.js";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";

export function Movies({
  name,
  rating,
  summary,
  poster,
  id,
  deleteButton,
  editButton,
}) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const styles = {
    color: rating < 7.5 ? "crimson" : "green",
    fontWeight: "bold",
  };

  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <section className="movie-specs">
        <div className="movie-name">
          <h3> {name} </h3>
          <InfoIcon
            color="primary"
            aria-label="more-info"
            onClick={() => {
              console.log(id);
              history.push("/movies/" + id);
            }}
          ></InfoIcon>
        </div>
        <div className="movie-rating">
          <p style={styles}>
            <span class="fa fa-star checked"></span>
            {rating}
          </p>
        </div>
      </section>
      <div className="description">
        <IconButton
          color="primary"
          aria-label="Show/Hide"
          onClick={() => setShow(!show)}
        >
          {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}{" "}
        </IconButton>
      </div>

      {/* conditional rendering */}
      {show ? "" : <p className="movie-summary">{summary}</p>}
      <div className="footer">
        <div>
          <Counter />
        </div>
        <div>
          {editButton} {deleteButton}
        </div>
      </div>
    </Card>
  );
}
