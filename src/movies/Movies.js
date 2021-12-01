import { useState } from 'react';
import { Counter } from "./Counter.js"; //[with .js also it works] //Name imports & exports
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";

export function Movies({ name, rating, summary, poster , id , deleteButton, editButton }) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const styles = {
    color: rating < 7.5 ? "crimson" : "green",
    fontWeight: "bold"
  };

  // conditional styling
  // const description = {
  //   display: show ? "block" : "none"
  // };
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <section className="movie-specs">
        <div className="movie-name">
        <h3 > {name} </h3>
        <InfoIcon 
          color="primary" 
          aria-label="more-info" 
          onClick={() => {
            console.log(id)
            history.push("/movies/" + id);
          }}>
        </InfoIcon>
        </div>
        <div className="movie-rating">
          <p style={styles}>
          <span class="fa fa-star checked"></span>
          {rating}</p>
        </div> 
      </section>
      <div className="description">
      <IconButton color="primary" aria-label="Show/Hide" onClick={() => setShow(!show)} >{ show ? <ExpandMoreIcon  /> :  <ExpandLessIcon /> } </IconButton>
      
      </div>
      {/* conditional rendering */}
      {show ?  "" : <p className="movie-summary">{summary} 
      </p> }
      <div className="footer">
        <div>
        <Counter />
        </div>
        <div>
          {editButton} {deleteButton}
        </div>
         
      </div>
      {/* contitional styling */}
      {/* <p style={description} className="movie-summary">{summary}</p> */}

    </Card>
  );
}