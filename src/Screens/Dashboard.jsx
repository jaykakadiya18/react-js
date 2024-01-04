// import React, { useState } from "react";

// function Dashboard() {
//   const [color, setcolor] = useState("#FFFF00");

//   const changeColor = () => {
//     setcolor("#ffffff");
//   };

//   return (
//     <div style={{ backgroundColor: color }}>
//       <h1>Thi is Dashboard!!!</h1>
//       <button onClick={changeColor}>Color</button>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';


export default function Dashboard() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


// function Dashboard() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Dashboard;