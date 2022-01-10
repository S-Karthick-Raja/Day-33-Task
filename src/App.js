import "./App.css";
import { MovieList } from "./movies/MovieList";
import { Switch, Route } from "react-router-dom";
import { Welcome } from "./Home/Welcome";
import { MovieDetails } from "./movies/MovieDetails";
import { Addmovies } from "./movies/Addmovies";
import { Editmovies } from "./movies/Editmovies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();
  return (
    <Paper elevation={4} style={{ borderRadius: "0px", minHeight: "100vh" }}>
      <div className="App">
        <AppBar position="static" style={{ marginBottom: "24px" }}>
          <Toolbar variant="dense">
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/")}
            >
              {" "}
              HOME{" "}
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/movies")}
            >
              {" "}
              MOVIES{" "}
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/Addmovies")}
            >
              {" "}
              ADD MOVIES{" "}
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            {" "}
            <Welcome />{" "}
          </Route>
          <Route path="/movies/edit/:id">
            {" "}
            <Editmovies />{" "}
          </Route>
          <Route path="/movies/:id">
            {" "}
            <MovieDetails />{" "}
          </Route>
          <Route path="/movies">
            {" "}
            <MovieList />{" "}
          </Route>
          <Route path="/Addmovies">
            {" "}
            <Addmovies />{" "}
          </Route>
        </Switch>
      </div>
    </Paper>
  );
}
