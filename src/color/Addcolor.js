import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function Addcolor() {
  const [color, setColor] = useState("Skyblue");
  const styles = { backgroundColor: color };
  // const colors = ["teal","orange","lavender"]
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div className="addcolor-div">
        <TextField label="Enter a color" variant="standard"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          style={styles} />
          {/* copy color list & then add the new color */}
        <Button variant="outlined" onClick={() => setColors([...colors, color])}>Add color</Button>
     

      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
