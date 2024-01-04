import React, { useCallback, useState } from "react";

function Call() {
  const [count, setCount] = useState(0);

  // Callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const newRandomNumbers = Array.from({ length: 1 }, () =>
      Math.floor(Math.random() * 1000000)
    );
    setRandomNumbers(newRandomNumbers);
    console.log(newRandomNumbers);
  };

  return (
    // <div>
    //   <p>Count: {count}</p>
    //   <button onClick={handleClick}>Increment</button>
    // </div>
    <div className="flex flex-auto h-screen items-center justify-center bg-slate-500">
      <button
        onClick={generateRandomNumbers}
        style={{ backgroundColor: "#" + randomNumbers[0] }}
        className="flex w-30 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        1
      </button>
      <button className="flex w-30 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        2
      </button>
      <button className="flex w-30 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        3
      </button>
    </div>
  );
}

export default Call;
