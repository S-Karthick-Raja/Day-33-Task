// import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import {useEffect, useState} from "react";

// import {useState} from 'react';
// hook is function - starts with 'use'
export function Counter() {
  // const like = 10;
  // const [state, setState] = useState(InitialValue);
  // state - current scenario - current data
  // state - imp variable; setState - Informing React state is change - re-render(updating)
  // render - showing on the screen 
  // button click -> onclick -> setlike -> Inform React like is changed
  // React will re-render the view
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect ( () => {
    console.log("Like is Updated", like);
  }, [like, dislike]);

  return (
    <div className="buttons">
      <IconButton aria-label="Like" 
      color="primary"
      className="like-button" onClick={() => {
        // like = like + 1; //React dosen't know like is changed
        setLike(like + 1); //Inform React Like is Changed
      }} > 
      <Badge badgeContent={like} color="primary"> 👍 </Badge>
      </IconButton>
      
      <IconButton aria-label="dislike"
      color="error"
      className="dislike-button" onClick={() => { setDislike(dislike + 1); }} >
      <Badge badgeContent={dislike} color="error"> 👎 </Badge>
      </IconButton>

    </div>
  );
}
