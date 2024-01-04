import { useState } from 'react'

function Fruit() {

  const arr = ["banana", "Apple", "Orange", "Chiku", "Watermelon", "melon", "Strawberry"]

  const [fruit, setFruit] = useState(0);

  const condition = () => {
    if (fruit < (arr.length - 1)) {
      return setFruit(fruit + 1);
    } else {
      console.log(fruit);
      return setFruit(0);
    }
  }

  return (
    <>
      
        <button onClick={condition}>Here is the fruit name: {arr[fruit]}</button>
        <br></br>
        <h2>Here is the count too {fruit} and array length {arr.length}</h2>
      
    </>
  )
}

export default Fruit
