import './App.css';
// import {useEffect} from "react"
// industry standard -> put all your imports @ Top
import { MovieList } from './movies/MovieList';
import { Addcolor } from './color/Addcolor';
// import {Counter, sum} from './counter' //[without .js also it works]
// console.log(sum(5))
// import Input from '@mui/material/Input';
// import { Switch, Route, Link, Redirect } from "react-router-dom"; //This is used  when we use link tag
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import { Notfound } from './404Not-Found/Notfound';
import { Welcome } from './Home/Welcome';
import { MovieDetails } from './movies/MovieDetails';
import { Addmovies } from './movies/Addmovies';
import { Editmovies } from './movies/Editmovies';
// import { Counter } from "./Counter.js";
// import Counter from './Counter'; //Default Import and exports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";
import { TicTakToe } from './tic-tac-toe/TicTakToe';
import { Basicform } from './Basicform';

export default function App() {
  // const [movies, setMovies] = useState([]);
  const history = useHistory();
  const [mode, setMode] = useState("dark")
  const theme = createTheme({ palette: { mode: mode},});
  return ( 
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{borderRadius:"0px", minHeight:"100vh"}}>
        <div className="App">
          <AppBar position="static" style={{marginBottom: "24px"}}>
            <Toolbar variant="dense">
              <Button variant="text" color="inherit" onClick={ () => history.push("/")}>HOME</Button>
              <Button variant="text" color="inherit" onClick={ () => history.push("/movies")}>MOVIES</Button>
              <Button variant="text" color="inherit" onClick={ () => history.push("/Addmovies")}>ADD MOVIES</Button>
              <Button variant="text" color="inherit" onClick={ () => history.push("/Addcolor")}>COLOR GAME</Button>
              <Button variant="text" color="inherit" onClick={ () => history.push("/TicTakToe")}>TicTakToe Game</Button>
              <Button variant="text" color="inherit" onClick={ () => history.push("/form")}>Basic Form</Button>
              <Button style={{marginLeft:"auto"}}
                startIcon =  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                variant="text" 
                color="inherit" 
                onClick={ () => setMode(mode === "light" ? "dark" : "light")}
                > {mode === "light" ? "Dark" : "Light"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          {/* <nav>
              <Link to="/">HOME</Link>
              <Link to="/movies">MOVIES</Link>
              <Link to="/Addmovies">ADD MOVIES</Link>
              <Link to="/Addcolor">COLOR GAME</Link>
          </nav> */}
          <Switch>
              {/* Route matches by substring */}
            <Route exact path="/"> <Welcome /> </Route>
              {/* Old Route /films -> movies */}
            <Route path="/films" > <Redirect to="movies"/> </Route>
            <Route path="/movies/edit/:id"> <Editmovies  /> </Route>
            <Route path="/movies/:id"> <MovieDetails /> </Route>
            <Route path="/movies"> <MovieList  /> </Route>
            <Route path="/Addmovies"> <Addmovies /> </Route>
            <Route path="/Addcolor"> <Addcolor/> </Route>
            <Route path="/TicTakToe"> <TicTakToe/> </Route>
            <Route path="/form"> <Basicform/> </Route>
            <Route path="**"> <Notfound /> </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}


