import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Card() {
  const [bg, setBg] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bg }}
    >
      {/* <Button variant="contained">Contained</Button> */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          style={{round:5}}
        >
          <Button onClick={() => setBg("red")}>Red</Button>
          <Button onClick={() => setBg("yellow")}>Yellow</Button>
          <Button onClick={() => setBg("orange")}>Orange</Button>
          <Button onClick={() => setBg("green")}>Green</Button>
          <Button onClick={() => setBg("violet")}>Violet</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Card;

// import React, { useState } from 'react'

// function Card() {

//   const [val, setVal] = useState('')

//   return (
//     <div>
//       <input type='text'
//       value={val}
//       onChange={(e) => setVal(e.target.value)}
//       >
//       </input>

//       <h1>He is the text: {val}</h1>
//     </div>
//   )
// }

// export default Card
